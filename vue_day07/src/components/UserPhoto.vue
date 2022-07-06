<template>
  <div>
    <div id="bt">
      <button class="sj" @click="comName = 'photo'">手机注册</button> &nbsp;
      <button class="yx" @click="comName = 'email'">邮箱注册</button>
    </div>

    <p>选择所在地区(实名认证所在地)</p>

    <div id="zg">
      <input type="radio" name="zg" />中国大陆
      <input type="radio" name="zg" />中国香港
    </div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import photo from '../components/01/Photo.vue';
import email from '../components/01/email.vue';
export default {
  data() {
    return {
      comName: 'photo',
    };
  },
  components: {
    photo,
    email,
  },
};
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
</style>
