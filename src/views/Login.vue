<template>
  <div id="login">
    <md-button @click="loginWithGoogle()" class="md-raised md-primary"
      >LoginWithGoogle</md-button
    >
  </div>
</template>

<script>

export default {
  methods: {
    loginWithGoogle() {
      this.$store.dispatch("login");
    },
  },
};
</script>