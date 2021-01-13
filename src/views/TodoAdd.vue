<template>
  <div class="add">
    <md-content class="create-form">
    <md-field>
      <label>Name</label>
      <md-input v-model="todoName" maxlength="100"></md-input>
    </md-field>
    <div class="md-layout md-gutter">
      <Priorities @update="setPriority"/>
    </div>
    <md-button :class="priority" @click="createTodo()" class="md-icon-button md-raised md-primary">
      <md-icon>add</md-icon>
    </md-button>
    </md-content>
  </div>
</template>

<script>
import Priorities from "@/components/Priorities.vue";

export default {
  name: "AddTodo",
  components: {
    Priorities
  },
  data: () => ({
    todoName: null,
    todoPriority: null,
    priority: "red"
  }),
  methods: {
    setPriority(p) {
      this.todoPriority = p;
      if (p == 0) {
        this.priority = "red";
      } else if (p == 1) {
        this.priority = "yellow";
      } else {
        this.priority = "green";
      }
    },
    createTodo() {
      this.$store.dispatch('createTodo', { todoName: this.todoName, todoPriority: this.todoPriority  })
    },
  }
};
</script>

<style>
.add {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.create-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.red {
  background-color: #fdd9d7 !important;
}
.yellow {
  background-color: #cdeefd !important;
}
.green {
  background-color: #dbefdc !important;
}
</style>