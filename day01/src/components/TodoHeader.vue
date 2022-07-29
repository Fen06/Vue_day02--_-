<template>
  <header class="header">
    <h1 :style="`color:${$store.state.color.color}`">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      @keydown.enter="enter"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="value"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions: TaskList } = createNamespacedHelpers("task");
export default {
  data() {
    return {
      id: 1,
      value: "",
    };
  },
  created() {},
  methods: {
    ...TaskList(["trueaddtrueTaskItem"]),
    enter() {
      console.log(this.value);
      if (this.$store.state.task.TaskList.length > 0) {
        this.id = this.$store.state.task.TaskList[0].id + 1;
      }
      this.trueaddtrueTaskItem({
        name: this.value,
        done: false,
        id: this.id,
      });
      this.value = "";
    },
  },
};
</script>
