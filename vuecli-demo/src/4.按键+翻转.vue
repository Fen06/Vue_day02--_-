<template>
  <div>
    <input type="text" @keydown.enter="enter" />
    <br />
    <input type="text" @keydown.esc="esc" />

    <h1>{{ msg }}</h1>
    <button @click="btn">翻转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Fuck World!',
    };
  },
  methods: {
    enter() {
      alert('Enter');
    },

    esc() {
      alert('Esc');
    },

    btn() {
      this.msg = this.msg.split('').reverse().join('');
    },
  },
};
</script>

<style></style>
