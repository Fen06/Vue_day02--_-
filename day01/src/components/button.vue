<template>
  <div>
    <button class="my-btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.my-btn {
  margin-left: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  border: 1px solid #ccc;
  outline: none;
  color: #000;
  width: 100px;
  height: 40px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.my-btn-danger {
  background-color: red;
}
</style>
