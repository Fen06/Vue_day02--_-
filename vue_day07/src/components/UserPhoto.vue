<template>
  <div>
    <div id="bt">
      <button class="sj">手机注册</button> &nbsp;
      <button class="yx">邮箱注册</button>
    </div>

    <p>选择所在地区(实名认证所在地)</p>

    <div id="zg">
      <input type="radio" v-model="dl" />中国大陆
      <input type="radio" v-model="dl" />中国香港
    </div>

    <div>
      <p>手机号码</p>
      <input type="text" class="usersj" placeholder="请输入手机号码" />
      <input type="text" class="useryzm" placeholder="输入验证码" />
      <button id="yzm">发送验证码</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#bt {
  margin-left: 115px;
}

#bt .sj {
  width: 80px;
  height: 30px;
  margin-top: 50px;
}

#bt .yx {
  width: 80px;
  height: 30px;
}

p {
  margin-left: 30px;
}

#zg {
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
