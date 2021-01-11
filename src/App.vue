<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <router-link style="
    text-decoration: none;
" class="md-title title" to="/"
          >TooDoo</router-link
        >
        <router-link to="/todo">About</router-link>
        <md-button @click="logout()" class="md-icon-button">
          <md-avatar>
            <img v-bind:src="user.photoURL" alt="Avatar" />
          </md-avatar>
        </md-button>
      </md-app-toolbar>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { logout, auth } from "./firebaseHelper";
import { mapState } from 'vuex'

let user = {};
auth.onAuthStateChanged((u) => (user = u));

export default {
  data() {
    return {
      user: user,
    };
  },
  computed: {
    ...mapState(['userProfile']),
  },
  methods: {
    logout() {
      console.log(2);
      logout();
    },
  },
};
</script>

<style>
a.router-link-exact-active {
  color: #fff !important;
}
a {
  color: #fff !important;
}
.title {
  flex: 1;
}
</style>
