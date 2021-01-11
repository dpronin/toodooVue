<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary header">
        <router-link style="text-decoration: none" class="md-title title" to="/"
          >TooDoo</router-link
        >
        <router-link to="/add"> 
        <md-button
          class="md-icon-button md-raised md-accent"
        >
          <md-icon>add</md-icon>
        </md-button>
        </router-link>
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
import { auth } from "./firebaseHelper";
import { mapState } from "vuex";

let user = {};
auth.onAuthStateChanged((u) => (user = u));

export default {
  data: () => ({
    user: user,
  }),
  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
