<template>
  <div :class="classContent">
    <div v-bind:key="index" v-for="(item, index) in items">
      <Item :classLabel="classLabel" :classItem="classItem" :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "./item";

export default {
  name: "Content",
  data() {
    return {
      classLabel: `vue-galery-drop__label `,
      classItem: `vue-galery-drop__item `
    };
  },
  components: {
    Item
  },
  props: {
    classContent: {
      type: String
    },
    items: {
      type: Array,
      default: new Array()
    },
    direction: {
      type: String,
      default: "left"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    active: function(v) {
      this.classLabel = `vue-galery-drop__label ${v ? "show" : ""}`;
      this.classItem = `vue-galery-drop__item ${v ? "show" : ""}`;
    }
  }
};
</script>
