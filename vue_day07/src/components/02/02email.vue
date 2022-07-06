<template>
  <div><slot name="email" :row="inemail"></slot><br /></div>
</template>

<script>
export default {
  data() {
    return {
      inemail: '',
    };
  },
};
</script>

<style scoped>
p {
  margin-left: 30px;
}

.usersj {
  width: 320px;
  height: 30px;
  margin-left: 30px;
}

.useryzm {
  width: 180px;
  height: 30px;
  margin-left: 30px;
  margin-top: 10px;
}

#yzm {
  height: 34px;
  width: 120px;
  margin-left: 10px;
}
</style>
