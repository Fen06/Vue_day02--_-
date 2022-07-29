<template>
  <div>
    <button @click="HuanFu">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import "../styles/base.css";
import "../styles/index.css";
import TodoFooter from "./components/TodoFooter.vue"; // shift + alt + 下
import TodoHeader from "./components/TodoHeader.vue"; // shift + alt + 下
import TodoMain from "./components/TodoMain.vue"; // shift + alt + 下
import { createNamespacedHelpers } from "vuex";
const { mapActions: UpColor } = createNamespacedHelpers("color");
export default {
  data() {
    return {};
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {},
  computed: {},
  methods: {
    ...UpColor(["trueUpColorData"]),
    HuanFu() {
      this.trueUpColorData();
    },
  },
};
</script>

<style scoped>
</style>
