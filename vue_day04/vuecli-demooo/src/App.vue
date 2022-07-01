<template>
  <div>
    <h1>使用同一个过滤去处理{{ fs }}粉丝数量</h1>
    <p>国内网站:粉丝数量:{{ fs }}</p>
    <p>国内网站:粉丝数量:{{ fs }}</p>

    <h2>使用同一个过滤去处理{{ sj }}时间戳</h2>
    <p>时间:{{ sj }}</p>
    <p>时间:{{ sj }}</p>
    <p></p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fs: 1876986,
      sj: 1636450540055,
    };
  },
};
</script>

<style></style>
