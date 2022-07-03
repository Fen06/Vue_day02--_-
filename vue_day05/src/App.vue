<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoMain from './components/TodoMain.vue';
import TodoHeader from './components/TodoHeader.vue';
export default {
  components: {
    TodoFooter,
    TodoMain,
    TodoHeader,
  },
};
</script>

<style lang="less" scoped></style>
