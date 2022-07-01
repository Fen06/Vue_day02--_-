<template>
  <div>
    <h1>使用同一个过滤去处理{{ fs }}粉丝数量</h1>
    <p>国内网站:粉丝数量:{{ fs | sot(4) }}</p>
    <p>国外网站:粉丝数量:{{ fs | sot(3) }}</p>

    <h2>使用同一个过滤去处理{{ sj }}时间戳</h2>
    <p>时间:{{ sj | format('/') }}</p>
    <p>时间:{{ sj | format('-') }}</p>
    <p></p>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      fs: 1876986,
      sj: 1636450540055,
    };
  },

  filters: {
    format(val, ele) {
      return moment(val).format('YYYY' + ele + 'MM' + ele + 'DD');
    },

    sot(val, ele) {
      if (ele == 4) {
        return Number(val / 10000) + '万';
      } else if (ele == 3) {
        return Number(val / 1000) + '千';
      }
    },
  },
};
</script>

<style></style>
