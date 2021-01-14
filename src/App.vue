<template>
  <div id="app">
    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <router-link v-if="user !== null && user.user !== null" to="/add">
          <md-button class="md-fab md-primary md-icon-button">
            <md-icon>add</md-icon>
          </md-button>
        </router-link>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <router-link v-if="user !== null && user.user !== null" to="/">
          <md-button class="md-fab md-primary md-icon-button">
            <md-icon>home</md-icon>
          </md-button>
        </router-link>

        <router-link v-if="user !== null && user.user !== null" to="/archived">
          <md-button class="md-fab md-primary md-icon-button">
            <md-icon>archive</md-icon>
          </md-button>
        </router-link>

        <md-button
          v-if="user !== null && user.user !== null"
          @click="logout()"
          class="md-icon-button md-primary md-fab"
        >
          <md-avatar>
            <img v-bind:src="user.photoURL" alt="Avatar" />
          </md-avatar>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
    <router-view />
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
