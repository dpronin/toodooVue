<template>
  <div class="todos">
    <waterfall
      v-if="todos.length"
      :line-gap="200"
      :min-line-gap="100"
      :max-line-gap="220"
      :single-max-width="300"
    >
      <waterfall-slot
        v-for="(item, index) in todos"
        :width="1"
        :height="1"
        :order="index"
        :key="item.id"
        move-class="item-move"
      >
        <Todo :todo="item" />
      </waterfall-slot>
    </waterfall>
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
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";

export default {
  name: "Todos",
  components: {
    Todo,
    Waterfall,
    WaterfallSlot,
  },
  computed: {
    ...mapState(["userProfile", "todos"]),
  },
};
</script>
<style scoped>
.item-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>