<template>
  <div class="hello">
    <md-card class="md-primary" md-theme="purple-card" md-with-hover>
      <md-card-header>
        <div class="md-title">{{ todo.name }}</div>
        <div class="md-subhead"></div>
      </md-card-header>

      <md-card-content> </md-card-content>
      <md-card-actions>
        <md-button  class="md-icon-button">
          <md-avatar class="md-avatar-icon md-small priority-red"></md-avatar>
        </md-button>
        <md-button  class="md-icon-button">
          <md-avatar class="md-avatar-icon md-small priority-yellow"></md-avatar>
        </md-button>
        <md-button  class="md-icon-button">
          <md-avatar class="md-avatar-icon md-small priority-green"></md-avatar>
        </md-button>
        <md-button class="md-icon-button" @click="remove(todo.id)">
          <md-icon>delete</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import { todosCollection } from "../firebaseHelper";

export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    remove(id) {
      todosCollection.doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    },
  },
};
</script>

<style>
.priority-red {
  background-color: red;
}
.priority-yellow {
  background-color: yellow;
}
.priority-green {
  background-color: green;
}
</style>
