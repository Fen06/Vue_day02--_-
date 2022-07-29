<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in $store.state.task.TaskList"
      :key="item.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" @click="Change(index)" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions: TaskList } = createNamespacedHelpers("task");
export default {
  data() {
    return {
    };
  },
  created() {},
  computed: {},
  methods: {
    ...TaskList(["trueTaskItem", "truedeltaskItem"]),
    Change(id) {
      this.trueTaskItem(id);
    },
    del(id) {
      this.truedeltaskItem(id);
    },
  },
};
</script>
