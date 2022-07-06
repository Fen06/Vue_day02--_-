<template>
  <div>
    <MyHeader></MyHeader>
    <div style="margin-top: 45px">
      <MyGoods :obj="item" v-for="item in list" :key="item.id"></MyGoods>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/car/MyHeader.vue';
import MyFooter from './components/car/MyFooter.vue';
import MyGoods from './components/car/MyGoods.vue';
export default {
  data() {
    return {
      list: [],
    };
  },

  created() {
    this.$axios({
      url: '/api/cart',
    }).then((res) => {
      console.log(res);
      this.list = res.data.list;
    });
  },

  components: {
    MyHeader,
    MyFooter,
    MyGoods,
  },
};
</script>

<style></style>
