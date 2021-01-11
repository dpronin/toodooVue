<template>
  <div class="hello">
    <md-card class="md-primary" :style="colorStyle(todo.priority)" md-theme="purple-card" md-with-hover>
      <md-card-header>
        <div class="md-title">{{ todo.name }}</div>
      </md-card-header>
      <md-card-actions>
        <Priorities @onHappy="updatePriority"/>
        <md-button class="md-icon-button" @click="remove()">
          <md-icon>delete</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Priorities from "@/components/Priorities.vue";

export default {
  name: "Todo",
  props: ["todo"],
  components: {
    Priorities
  },
  methods: {
    colorStyle(prioty) {
      let color = "#fdd9d7"
      if (prioty == 1) {
        color = "#cdeefd"
      } else if (prioty == 2) {
        color = "#dbefdc"
      }
      return { backgroundColor: `${color} !important`}
    },
    updatePriority(p) {
      this.todo.priority = p;
      this.$store.dispatch('updateTodo', this.todo)
    },
    remove() {
      this.$store.dispatch('removeTodo', this.todo)
    },
  },
};
</script>
