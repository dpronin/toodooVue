<template>
  <div
    class="todo"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    :style="colorStyle(todo.priority, isArchived)"
  >
    <span class="md-title title" v-show="!toShowOnHover">{{ todo.name }}</span>
    <div class="actions" v-show="toShowOnHover">
      <Priorities @update="updatePriority" />
      <md-button class="md-icon-button" @click="remove(isArchived)">
        <md-icon>delete</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import Priorities from "@/components/Priorities.vue";

export default {
  name: "Todo",
  props: ["todo", "isArchived"],
  components: {
    Priorities,
  },
  data: () => ({
    toShowOnHover: false,
  }),
  methods: {
    colorStyle(prioty, isArchived) {
      let color = "#fdd9d7";
      if (!isArchived) {
        if (prioty == 1) {
          color = "#cdeefd";
        } else if (prioty == 2) {
          color = "#dbefdc";
        }
      } else {
        color = "#cfd8dc"
      }
      return { backgroundColor: `${color} !important` };
    },
    updatePriority(p) {
      this.todo.priority = p;
      this.$store.dispatch("updateTodo", this.todo);
    },
    remove(isArchived) {
      if (isArchived) {
        this.$store.dispatch("removeTodo", this.todo);
      } else {
        this.todo.status = "archived";
        this.$store.dispatch("updateTodo", this.todo);
      }
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
  z-index: 1000;
}
</style>
