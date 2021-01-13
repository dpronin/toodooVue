<template>
  <div
    class="todo"
    @mouseover="mouseEnter"
    @mouseleave="mouseLeave"
    :style="colorStyle(todo.priority)"
  >
    <span class="md-title title">{{ todo.name }}</span>
    <div class="actions" v-show="toShowOnHover">
      <Priorities @onHappy="updatePriority" />
      <md-button class="md-icon-button" @click="remove()">
        <md-icon>delete</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import Priorities from "@/components/Priorities.vue";

export default {
  name: "Todo",
  props: ["todo"],
  components: {
    Priorities,
  },
  data: () => ({
    toShowOnHover: false,
  }),
  methods: {
    colorStyle(prioty) {
      let color = "#fdd9d7";
      if (prioty == 1) {
        color = "#cdeefd";
      } else if (prioty == 2) {
        color = "#dbefdc";
      }
      return { backgroundColor: `${color} !important` };
    },
    updatePriority(p) {
      this.todo.priority = p;
      this.$store.dispatch("updateTodo", this.todo);
    },
    remove() {
      this.$store.dispatch("removeTodo", this.todo);
    },
    mouseEnter() {
      this.toShowOnHover = !this.toShowOnHover;
    },
    mouseLeave() {
      this.toShowOnHover = false;
    },
  },
};
</script>
<style scoped>
.todo {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  padding: 16px;
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
