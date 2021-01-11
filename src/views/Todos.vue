<template>
  <div class="home">
    <md-content>
    <Todo/>
    <md-button class="md-raised md-primary">Primary</md-button>
    </md-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todo.vue'
import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

export default {
  name: 'Todos',
  components: {
    Todo,
  }
}
</script>
