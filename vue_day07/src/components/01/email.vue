<template>
  <div>
    <p>邮 箱</p>
    <youx>
      <template v-slot:email="scoped">
        <input
          type="text"
          v-model="scoped.row"
          class="usersj"
          placeholder="请输入邮箱"
        />
      </template>
    </youx>
    <input type="text" class="useryzm" placeholder="输入验证码" />
    <button id="yzm">邮箱验证</button>
  </div>
</template>

<script>
import youx from '../02/02email.vue';
export default {
  components: {
    youx,
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
