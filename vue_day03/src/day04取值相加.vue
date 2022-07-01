<template>
  <div>
    <div v-for="item in arr" :key="item">
      <input type="checkbox" v-model="ckeckboxSum" :value="item" />
      <span>{{ item }}</span>
    </div>
    <p>你选中的元素, 累加的值和为:{{ tum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      ckeckboxSum: [],
    };
  },

  computed: {
    tum() {
      return this.ckeckboxSum.reduce((sum, val) => {
        return (sum += val);
      }, 0);
    },
  },
};
</script>

<style></style>
