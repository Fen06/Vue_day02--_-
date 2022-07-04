<template>
  <div id="app">
    <input type="text" placeholder="搜索书本名称" />

    <table border="1" width="700" style="border-collapse: collapse">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in item" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td>
            <button @click="del(item.id)">删除</button>
            <button>详情</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },

  methods: {
    del(id) {
      this.$emit('del', id);
    },
  },
};
</script>

<style></style>
