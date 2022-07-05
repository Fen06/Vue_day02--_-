<template>
  <div id="app">
    <input
      type="text"
      placeholder="搜索书本名称"
      @keydown.enter="down"
      v-model="bookName"
    />

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
            <button @click="details(item)">详情</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div id="box">{{ box }}</div>
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
    return {
      bookName: '',
      box: '',
    };
  },

  methods: {
    details(val) {
      // console.log(val);

      // console.log(this.list);
      this.box = [
        `序号为：${val.id}, 书名为：${val.bookname}, 作者为：${val.author}`,
      ];
      this.$emit('details', val);
    },
    del(id) {
      // console.log(id);
      this.$axios({
        url: '/api/delbook',

        method: 'GET',
        params: { id: id },
      }).then((res) => {
        console.log(res);
        alert(res.data.msg + '，请刷新页面显示');
      });
    },

    // del(id) {
    //   this.$emit('del', id);
    // },

    // down() {
    //   this.$emit('down');
    // },

    down() {
      if (this.bookName.length === 0) {
        // console.log(this.$parent.list[0].bookname);
        return alert('内容不能为空');
      }

      this.$emit('down', this.bookName);
    },
  },
};
</script>

<style>
#box {
  width: 500px;
  height: 100px;
  border: 1px solid red;
}
</style>
