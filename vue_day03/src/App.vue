<!-- vue中$set的用法 -->
<template>
  <div>
    <h6>$set的用法</h6>
    <div>
      姓名：{{ userInfo.name }}
      <br />
      年龄：{{userInfo.age}}
      <br />
      性别：{{userInfo.sex}}
      <br />
      说明：{{userInfo.info.content}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: "简书",
        age: "3",
        info: {
          content: "my name is test",
        },
      },
    };
  },

  components: {},

  computed: {},

  mounted() {
    console.log("this:", this);
    this.$set(this.userInfo, "sex", "男");
  },

  watch: {},

  methods: {},
};
</script>
<style>
</style>
