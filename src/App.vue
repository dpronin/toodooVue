<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary header">
        <router-link style="text-decoration: none" class="md-title title" to="/"
          >TooDoo</router-link
        >
        <router-link v-if="user !==null && user.user !== null" to="/add">
          <md-button class="md-icon-button md-raised md-accent">
            <md-icon>add</md-icon>
          </md-button>
        </router-link>
        <md-button v-if="user !==null && user.user !== null" @click="logout()" class="md-icon-button">
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
import { mapState } from "vuex";

        
export default {
  computed: {
    ...mapState(["user"]),
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
