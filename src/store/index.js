import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebaseHelper'
import router from '../router/index'

Vue.use(Vuex)

// listen firebase stream
fb.auth.onAuthStateChanged((user) => {
	store.commit('setUserProfile', user)
	if (!user) return
	fb.todosCollection
		.where('userId', '==', user.uid)
		.where('status', '!=', 'archived')
		.orderBy("status")
		.orderBy("priority")
		.onSnapshot(snapshot => {
			let todosArray = []

			snapshot.forEach(doc => {
				let post = doc.data()
				post.id = doc.id

				todosArray.push(post)
			})
			store.commit('setTodos', todosArray)
		})
});

const store = new Vuex.Store({
	state: {
		todos: [],
		archivedTodos: [],
		user: fb.auth.currentUser
	},
	mutations: {
		setUserProfile(state, val) {
			state.user = val
			router.push('/')
		},
		setPerformingRequest(state, val) {
			state.performingRequest = val
		},
		setTodos(state, val) {
			state.todos = val
		},
		setArchivedTodos(state, val) {
			state.archivedTodos = val
		},
	},
	getters: {
		user: state => {
			return state.user;
		}
	},
	actions: {
		async login() {
			await fb.auth.signInWithRedirect(fb.provider)
		},
		async logout({ commit }) {
			await fb.auth.signOut()
			commit('setUserProfile', null)
			router.push('/login')
		},
		async fetchArchivedTodos({ commit }) {
			fb.todosCollection
				.where('userId', '==', this.state.user.uid)
				.where('status', '==', 'archived')
				.orderBy("priority")
				.get().then(function (snapshot) {
					let todosArray = []
					
					snapshot.forEach(doc => {
						let post = doc.data()
						post.id = doc.id

						todosArray.push(post)
					})
					commit('setArchivedTodos', todosArray)
				});
		},
		async fetchUserProfile({ commit }, user) {
			const userProfile = await fb.usersCollection.doc(user.uid).get()
			commit('setUserProfile', userProfile.data())
			if (router.currentRoute.path === '/login') {
				router.push('/')
			}
		},
		async createTodo({ state, commit }, todo) {
			console.log(state, commit);
			await fb.todosCollection.add({
				createdOn: new Date(),
				status: "ready",
				name: todo.todoName,
				userId: fb.auth.currentUser.uid,
				priority: todo.todoPriority,
			})
			router.push('/')
		},
		async updateTodo({ commit }, todo) {
			console.log(commit);
			await fb.todosCollection.doc(todo.id).update(todo)
		},
		async removeTodo({ state, dispatch }, todo) {
			console.log(state)
			fb.todosCollection.doc(todo.id).delete().then(function () {
				console.log("Document successfully deleted!");
			}).catch(function (error) {
				console.error("Error removing document: ", error);
			});
			dispatch('fetchArchivedTodos');
		},
	}
})


export default store