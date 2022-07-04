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
        <BOOKMIN v-for="item in list" :key="item.id" :info="item"></BOOKMIN>
      </tbody>
    </table>
  </div>
</template>

<script>
import BOOKMIN from './components/BOOKMIN.vue';
export default {
  data() {
    return {
      list: [],
      created() {},
    };
  },

  components: {
    BOOKMIN,
  },

  methods: {
    convert: function () {
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
      }).then((res) => {
        console.log(res);
        // this.list = res;

        this.list = res.data.data;
      });
    },
  },

  mounted() {
    this.convert();
  },
};
</script>

<style></style>
