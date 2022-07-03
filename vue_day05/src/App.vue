<template>
  <div>
    <TodoHeader @down="down"></TodoHeader>
    <TodoMain :list="list"></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoMain from './components/TodoMain.vue';
import TodoHeader from './components/TodoHeader.vue';
export default {
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 201, name: '睡觉', isDone: false },
        { id: 103, name: '打豆豆', isDone: true },
      ],
    };
  },
  components: {
    TodoFooter,
    TodoMain,
    TodoHeader,
  },

  methods: {
    down(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
