<template>
  <div id="app">
    <md-speed-dial v-if="user !== null && user.user !== null" class="md-bottom-right">
      <md-speed-dial-target>
        <router-link to="/add">
          <md-button class="md-fab md-primary md-icon-button">
            <md-icon>add</md-icon>
          </md-button>
        </router-link>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <router-link to="/">
          <md-button class="md-fab md-primary md-icon-button">
            <md-icon>home</md-icon>
          </md-button>
        </router-link>

        <router-link to="/archived">
          <md-button class="md-fab md-primary md-icon-button">
            <md-icon>archive</md-icon>
          </md-button>
        </router-link>

        <md-button 
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
