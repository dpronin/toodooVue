<template>
  <div class="priorities">
    <md-button @click="updatePriority(0)" class="md-icon-button">
      <md-avatar class="priority md-avatar-icon md-small priority-red"></md-avatar>
    </md-button>
    <md-button @click="updatePriority(1)" class="md-icon-button">
      <md-avatar class="priority md-avatar-icon md-small priority-yellow"></md-avatar>
    </md-button>
    <md-button @click="updatePriority(2)" class="md-icon-button">
      <md-avatar class="priority md-avatar-icon md-small priority-green"></md-avatar>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Priorities",
  methods: {
    updatePriority(a) {
      this.$emit("onHappy", a);
    },
  },
};
</script>

<style>
.priority-red {
  background-color: #fdd9d7 !important;
}
.priority-yellow {
  background-color: #cdeefd !important;
}
.priority-green {
  background-color: #dbefdc !important;
}
.priority  {
  border: 1px solid white !important;
}
</style>
