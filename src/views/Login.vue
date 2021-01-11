<template>
  <div id="login">
    <md-button @click="loginWithGoogle()" class="md-raised md-primary"
      >LoginWithGoogle</md-button
    >
  </div>
</template>

<script>
import { login } from "../firebaseHelper";

export default {
  methods: {
    loginWithGoogle() {
      login();
    },
  },
};
</script>