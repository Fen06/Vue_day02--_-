<template>
  <div>
    <a :href="href">去百度</a>
    <img :src="src" />
    <img :src="imgUrl" />
  </div>
</template>

<script>
import imgUrl from './assets/logo.png';
export default {
  data() {
    return {
      href: 'https://www.baidu.com/',
      src: 'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      imgUrl: imgUrl,
    };
  },
  methods: {},
};
</script>

<style></style>
