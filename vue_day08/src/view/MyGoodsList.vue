<template>
  <div>
    <MyTable :arr="list"></MyTable>
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
      console.log(res);
      this.list = res.data.data;
    });
  },
};
</script>

<style></style>
