<template>
  <div 
  :class="classItem" 
  :style="{
      backgroundImage: `url('${item.backgroundImage}')`,
      backgroundColor: `${(item.backgroundColor && item.backgroundColor)}`,
    }">
    <span :class="classLabel" v-on:click="handleClick(item)">{{item.label}}</span>
  </div>
</template>

<script>
export default {
  name: "Item",
  methods: {
    handleClick: item => {
      if (typeof item.onClick === "function") {
        item.onClick();
      }
    } 
  },
  props: {
    item: {
      type: Object,
      default: new Object()
    },
    classLabel: {
      type: String
    },
    classItem: {
      type: String
    }
  },
};
</script>
