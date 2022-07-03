<template>
  <div>
    <TodoHeader @down="down"></TodoHeader>
    <TodoMain :list="show" @del="del"></TodoMain>
    <TodoFooter :sum="sum" @filter="filter"></TodoFooter>
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

      gettrue: '',
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

    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);

      this.list.splice(index, 1);
    },
    filter(val) {
      this.gettrue = val;
    },
  },

  computed: {
    sum() {
      return this.list.filter((ele) => !ele.isDone).length;
    },

    show() {
      if (this.gettrue == 'no') {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.gettrue == 'yes') {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
