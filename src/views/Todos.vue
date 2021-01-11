<template>
  <div class="todos">
    <md-list v-if="posts.length">
      <div v-for="todo in posts" :key="todo.id">
        <Todo v-bind:todo="todo" />
      </div>
    </md-list>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import { todosCollection } from "../firebaseHelper";
import { mapState } from "vuex";

let todos = [];

export default {
  name: "Todos",
  components: {
    Todo,
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
  },
  data() {
    return {
      todos: todos,
    };
  },
  updated() {
    console.log(todos.length);
  },
  created() {
    let t = [];
    todosCollection.onSnapshot((snap) => {
      snap.forEach((doc) => {
        let data = {
          id: doc.id,
          name: doc.data().name,
        };
        t.push(data);
      });
      this.todos = t;
    });
  },
};
</script>
