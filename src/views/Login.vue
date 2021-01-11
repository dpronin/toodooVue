<template>
  <div id="login">
    <md-button @click="loginWithGoogle()" class="md-raised md-primary"
      >Primary</md-button
    >
  </div>
</template>

<script>
import { login } from "../firebaseHelper";

export default {
  methods: {
    loginWithGoogle() {
      login();
    //   this.$store.dispatch("login", {
    //     email: this.loginForm.email,
    //     password: this.loginForm.password,
    //   });
    },
  },
};
</script>