<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">调转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['刘备', '关羽', '张飞'],
    };
  },

  methods: {
    btn() {
      this.arr.push(this.arr[0]);
      this.arr.shift();
    },
  },
};
</script>

<style></style>
