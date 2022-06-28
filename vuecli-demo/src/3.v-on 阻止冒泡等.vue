<template>
  <div @click="father">
    <a @click="one" href="https://www.baidu.com/">阻止百度</a>
    <a @click="two(10, $event)" href="https://www.baidu.com/"
      >阻止百度 参数传入</a
    >

    <button @click.stop="mp">阻止冒泡</button>
    <a href="https://www.baidu.com/" @click.prevent.stop="xw">阻止默认行为</a>
    <button @click.once="once">只有一次</button>
    <!-- once 加不了阻止冒泡 艹 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    one(e) {
      e.preventDefault();
    },
    two(num, e) {
      e.preventDefault();
    },
    father() {
      console.log('Father');
    },
    mp() {
      console.log('阻止冒泡');
    },

    xw() {
      console.log('阻止默认行为');
    },

    once() {
      console.log('只有一次');
    },
  },
};
</script>

<style></style>
