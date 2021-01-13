<template>
  <div id="login">
    <md-empty-state
        md-icon="login"
        md-label="Login via social networks"
      >
      <md-button @click="loginWithGoogle()" class="md-raised md-primary"
      >Login with Google</md-button
    >
      </md-empty-state>
    
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