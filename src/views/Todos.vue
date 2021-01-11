<template>
  <div class="todos">
    <md-list v-if="todos.length">
      <div v-for="todo in todos" :key="todo.id">
        <Todo v-bind:todo="todo" />
      </div>
    </md-list>
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
