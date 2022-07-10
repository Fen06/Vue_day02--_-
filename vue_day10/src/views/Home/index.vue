<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getRandomListApi } from '@/apis/index';

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getRanList();
  },
  methods: {
    async getRanList() {
      try {
        const res = await getRandomListApi({
          limit: 6,
        });
        console.log(res.data);
        this.list = res.data.result;
      } catch (e) {
        console.log('e', e);
      }
    },
  },
};
</script>

<style lang="less" scope>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
}
</style>
