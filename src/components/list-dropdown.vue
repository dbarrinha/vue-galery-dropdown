<template>
  <div>
    <div class="react-list-drop__container">
      <button @click="toggleComponent(!active)" :class="classButtom">{{label}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListDrop',
  data () {
    return {
      active: false,
      classButtom: `react-list-drop__button ${(this.active ? 'active' : '')}`
    }
  },
  props: {
    label
  },
  methods: {
    toggleComponent (active) {
      this.active = active
    }
  }
}
</script>

<style scoped>
</style>
