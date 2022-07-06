<template>
  <div>
    <div>
      <p>密码登录</p>
      <input type="password" placeholder="请输入密码" id="mm" />
      <br />
      <input
        type="password"
        class="useryzm"
        placeholder="再次输入登录密码"
        id="mmm"
      />
    </div>

    <div>
      <p id="xt">邀请码(选填)</p>
      <input type="password" placeholder="选填" id="yzm" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  margin-left: 30px;
}

#mm {
  width: 320px;
  height: 30px;
  margin-left: 30px;
}

#mmm {
  width: 320px;
  height: 30px;
  margin-left: 30px;
  margin-top: 10px;
}

#xt {
  margin-top: 30px;
}

#yzm {
  width: 320px;
  height: 30px;
  margin-left: 30px;
}
</style>
