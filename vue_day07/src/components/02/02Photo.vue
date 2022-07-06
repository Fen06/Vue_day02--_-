<template>
  <div>
    <p>手机号码</p>
    <slot name="photo" :row="Sjphoto"></slot><br />
    <slot name="photoYz" :row="Sjphoto"></slot>
    <!-- <input type="text" class="usersj" placeholder="请输入手机号码" />
    <input type="text" class="useryzm" placeholder="输入验证码" /> -->
    <button id="yzm">发送验证码</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Sjphoto: {
        ph: '',
        Yph: '',
      },
    };
  },
};
</script>

<style scoped>
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
p {
  margin-left: 30px;
}
</style>
