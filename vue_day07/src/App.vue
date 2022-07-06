<template>
  <div class="box">
    <UserPhoto></UserPhoto>
    <Userpass></Userpass>
  </div>
</template>

<script>
import UserPhoto from './components/UserPhoto.vue';
import Userpass from './components/Userpassword.vue';
export default {
  components: {
    UserPhoto,
    Userpass,
  },
};
</script>

<style scoped>
body {
  background-color: #f7f8f9;
}
.box {
  width: 400px;
  height: 600px;
  background-color: #eff3f8;
  margin: 200px auto;
  /* box-shadow: 2px 2px #000 2px; */
}
</style>
