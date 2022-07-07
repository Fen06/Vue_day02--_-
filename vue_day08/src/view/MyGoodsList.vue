<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <!-- <td>{{ scope.row.id }}</td> -->

        <input
          type="text"
          class="tag-input form-control"
          style="width: 100px"
          v-fous
          v-model="scope.row.inputValue"
          v-if="scope.row.inputShow"
          @blur="scope.row.inputShow = false"
          @keydown.enter="enter(scope.row)"
          @keydown.esc="scope.row.inputValue = ''"
        />
        <button
          class="btn btn-primary btn-sm add-tag"
          v-else
          @click="scope.row.inputShow = true"
        >
          +Tag
        </button>
        <span
          class="badge badge-warning"
          v-for="item in scope.row.tags"
          :key="item"
          style="margin-left: 8px"
          >{{ item }}</span
        >

        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
          <button
            class="btn btn-danger btn-sm"
            style="margin-left: 18px"
            id="Admin"
            v-User
          >
            管理
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';
export default {
  data() {
    return {
      list: [],
    };
  },

  components: {
    MyTable,
  },

  created() {
    this.$axios({
      url: '/api/goods',
    }).then((res) => {
      res.data.data.forEach((ele) => {
        ele.inputShow = false;
      });
      console.log(res);
      this.list = res.data.data;
    });
  },

  methods: {
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },

    enter(obj) {
      //   console.log(obj);
      if (obj.inputValue.trim() == '') {
        return alert('内容不能为空');
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
};
</script>

<style></style>
