<template>
  <div class="layout">
    <van-nav-bar :title="$route.meta.title" />
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
};
</script>

<style></style>
