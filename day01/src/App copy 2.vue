<template>
  <div>
    <myBtn>默认按钮</myBtn>
    <myBtn type="danger" :class="btnClass">红色按钮</myBtn>
  </div>
</template>

<script>
import myBtn from "./components/button.vue";
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  components: {
    myBtn,
  },
  computed: {
    btnClass() {
      return {
        "my-btn-danger": this.type === "danger",
      };
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped>
</style>
