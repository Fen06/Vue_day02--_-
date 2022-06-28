<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./asset/01.jpg"
        alt=""
        @mousemove="mousemoveFn(1)"
        @click="Fn(1, $event)"
      />
      <img
        src="./asset/02.jpg"
        alt=""
        @mousemove="mousemoveFn(2)"
        @click="Fn(2, $event)"
      />
      <img
        src="./asset/03.jpg"
        alt=""
        @mousemove="mousemoveFn(3)"
        @click="Fn(3, $event)"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="src" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img01 from './asset/01.jpg';
import img02 from './asset/02.jpg';
import img03 from './asset/03.jpg';

export default {
  data() {
    return {
      src: img01,
    };
  },
  methods: {
    mousemoveFn(val) {
      this.src = { 1: img01, 2: img02, 3: img03 }[val];
    },
    Fn(val, event) {
      alert(`第${val}张,${event}`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
