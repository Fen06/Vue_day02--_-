<template>
  <div>
    <p>邮  箱</p>
    <input type="text" class="usersj" placeholder="请输入邮箱" />
    <input type="text" class="useryzm" placeholder="输入验证码" />
    <button id="yzm">邮箱验证</button>
  </div>
</template>

<script>
export default {};
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
