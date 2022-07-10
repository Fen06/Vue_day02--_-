<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="inputFn"
    />
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
          @input="inputFn"
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
      page: 1,
    };
  },
  created() {
    this.getHotList();
  },

  methods: {
    async getLish() {
      return await getSearchListApi({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20,
      });
    },

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
          limit: 20,
          offset: (this.page - 1) * 20,
        });
        console.log(res);
        this.Searchlist = res.data.result.songs;

        // this.hotList = res.data.result.hots;
      } catch (e) {
        console.log('e', e);
        this.$Toast.fail('获取失败');
      }
    },
    // onLoad() {},

    async inputFn() {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        this.finished = false;
        if (this.value.length == 0) {
          this.Searchlist = [];
          return;
        }
        const res = await getSearchListApi({
          keywords: this.value,
        });
        console.log(res);
        this.Searchlist = res.data.result.songs;
        // this.hotList = res.data.result.hots;
        if (res.data.result.songs === undefined) {
          this.Searchlist = [];
          return;
        }
        this.Searchlist = res.data.result.songs;
        this.loading = false;
      }, 900);
    },

    async onLoad() {
      this.page++;
      const res = await this.getLish();
      console.log(res);
      this.Searchlist = [...this.Searchlist, ...res.data.result.songs];
      this.loading = false;
    },
  },
};
</script>
