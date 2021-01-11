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
		async removeTodo({ state, commit }, todo) {
			console.log(state, commit);

			fb.todosCollection.doc(todo.id).delete().then(function () {
				console.log("Document successfully deleted!");
			}).catch(function (error) {
				console.error("Error removing document: ", error);
			});
		},
	}
})


export default store