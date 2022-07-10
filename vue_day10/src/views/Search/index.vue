<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->

    <template v-if="Searchlist.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="red"
          size="large"
          plain
          round
          type="primary"
          v-for="item in hotList"
          :key="item.first"
          style="margin: 0 6px 6px 0"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div></template
    >
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in Searchlist"
          :key="item.id"
          :title="item.name"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getHotListApi, getSearchListApi } from '@/apis';
export default {
  data() {
    return {
      hotList: [],
      value: '',
      Searchlist: [],
      loading: false,
      finished: false,
    };
  },
  created() {
    this.getHotList();
  },

  methods: {
    async getHotList() {
      try {
        const res = await getHotListApi();
        // console.log(res);
        this.hotList = res.data.result.hots;
      } catch (e) {
        console.log('e', e);
      }
    },
    async clickFn(val) {
      this.value = val;
      try {
        const res = await getSearchListApi({
          keywords: this.value,
        });
        console.log(res);
        this.Searchlist = res.data.result.songs;
        // this.hotList = res.data.result.hots;
      } catch (e) {
        console.log('e', e);
      }
    },
    onLoad() {},
  },
};
</script>
