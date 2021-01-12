<template>
  <div class="todos">
    <md-list v-if="todos.length">
      <div class="md-layout">
        <Todo
          v-for="todo in todos"
          :key="todo.id"
          class="md-layout-item 
          md-xlarge-25 
          md-large-25 
          md-medium-size-33 
          md-small-size-50 
          md-xsmall-size-100
          todo"
          v-bind:todo="todo"
        />
      </div>
    </md-list>
    <div v-else>
      <md-empty-state
        md-icon="add_task"
        md-label="Create your first todo"
        md-description="By click on + button"
      >
      </md-empty-state>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import { mapState } from "vuex";

export default {
  name: "Todos",
  components: {
    Todo,
  },
  computed: {
    ...mapState(["userProfile", "todos"]),
  },
};
</script>
<style scoped>
.todo {
  margin-bottom: 8px;
}
</style>