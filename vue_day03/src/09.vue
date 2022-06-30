<template>
  <div>
    <div v-for="(item, index) in arr" :key="index" sytle="display:inline-block">
      <input type="checkbox" value="item" v-model="ck"/>
      <span>{{ item }}</span>
    </div>
    
    <p>选中的元素，累计的值和为：{{}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],

    };
  },

  
};
</script>

<style></style>
