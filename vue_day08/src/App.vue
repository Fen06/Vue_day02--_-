<template>
  <div>
    <MyHeader title="Day_08"></MyHeader>
    <div style="margin-top: 45px">
      <components :is="comName"></components>
    </div>
    <MyTabBar :list="tabList" @changeCurrent="change"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTabBar from './components/MyTabBar.vue';

import MyGoodsList from './view/MyGoodsList.vue';
import MyGoodsSearch from './view/MyGoodsSearch.vue';
import MyUserInfo from './view/MyUserInfo.vue';
export default {
  data() {
    return {
      User: ['Admin', 'developer', 'user'],
      comName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },

  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },

  methods: {
    change(val) {
      // console.log(val);
      this.comName = val;
    },
  },
};
</script>

<style></style>
