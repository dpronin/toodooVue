import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebaseHelper'
import router from '../router/index'

Vue.use(Vuex)

// realtime firebase
fb.todosCollection.onSnapshot(snapshot => {
	let postsArray = []

	snapshot.forEach(doc => {
		let post = doc.data()
		post.id = doc.id

		postsArray.push(post)
	})

	store.commit('setPosts', postsArray)
})

const store = new Vuex.Store({
	state: {
		userProfile: {},
		posts: []
	},
	mutations: {
		setUserProfile(state, val) {
			state.userProfile = val
		},
		setPerformingRequest(state, val) {
			state.performingRequest = val
		},
		setPosts(state, val) {
			state.posts = val
		}
	},
	actions: {
		async login({ dispatch }, form) {
			// sign user in
			const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

			// fetch user profile and set in state
			dispatch('fetchUserProfile', user)
		},
		async logout({ commit }) {
			// log user out
			await fb.auth.signOut()

			// clear user data from state
			commit('setUserProfile', {})

			// redirect to login view
			router.push('/login')
		},
		async createTodo({ state, commit }, todo) {
			// create post in firebase
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
			
			fb.todosCollection.doc(todo.id).delete().then(function() {
				console.log("Document successfully deleted!");
			}).catch(function(error) {
				console.error("Error removing document: ", error);
			});
		},
	}
})

export default store