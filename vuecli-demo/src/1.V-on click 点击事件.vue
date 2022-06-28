<template>
  <div>
    <h1>人类幸福指数：{{ msg }}</h1>

    <button @click="current">+1</button>
    <button @click="Fcurrent(5)">-5</button>
    <button @click="Addcurrent">+99999</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: -9999,
    };
  },

  methods: {
    current() {
      this.msg++;
    },
    Fcurrent(val) {
      this.msg -= val;
    },
    Addcurrent() {
      alert('不允许');
    },
  },
};
</script>

<style></style>
