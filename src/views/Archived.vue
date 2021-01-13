<template>
  <div class="todos">
    <waterfall
      v-if="archivedTodos.length"
      :line-gap="200"
      :min-line-gap="100"
      :max-line-gap="220"
      :single-max-width="300"
    >
      <waterfall-slot
        v-for="(item, index) in archivedTodos"
        :width="1"
        :height="1"
        :order="index"
        :key="item.id"
        move-class="item-move"
      >
        <Todo :todo="item" v-bind:is-archived="true"/>
      </waterfall-slot>
    </waterfall>
    <div v-else>
      <md-empty-state
        md-icon="done_all"
        md-label="Archived todos will be there"
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
  name: "Archived",
  components: {
    Todo,
    Waterfall,
    WaterfallSlot,
  },
  computed: {
    ...mapState(["archivedTodos"]),
  },
  created() {
    this.$store.dispatch('fetchArchivedTodos');
  }
};
</script>
<style scoped>
.item-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>