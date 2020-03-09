<template>
  <div>
    <div class="vue-galery-drop__container">
      <button @click="toggleComponent(!active)" :class="classButtom">{{label}}</button>
      <Content :active="active" :items="items" :class="classContent" :direction="direction" />
    </div>
  </div>
</template>

<script>
import Content from './content'

export default {
  name: 'ListDrop',
  data () {
    return {
      active: false,
      classContent: `vue-galery-drop__dropdown ${this.direction} ${this.active ? " active" : ""}`,
      classButtom: `vue-galery-drop__button `
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: new Array()
    },
    direction: {
      type: String,
      default: 'left'
    },
  },
  components:{
    Content
  },
  methods: {
    toggleComponent (active) {
      this.active = active
      this.classButtom = `vue-galery-drop__button ${(this.active ? 'active' : '')}`
      this.classContent = `vue-galery-drop__dropdown ${this.direction} ${this.active ? " active" : ""}`
    }
  }
}
</script>

<style scoped>
</style>
