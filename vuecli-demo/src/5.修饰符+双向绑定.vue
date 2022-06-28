<template>
  <div>
    <div>
      <span>姓名：</span>
      <input type="text" v-model.trim="username" />
    </div>

    <div>
      <span>年龄：</span>
      <input type="text" v-model.number="age" />
    </div>

    <div>
      <span>所选地区：</span>
      <input type="radio" v-model="area" value="1" />中国大陆
      <input type="radio" v-model="area" value="2" />中国香港
    </div>

    <div>
      <span>电话号码：</span>
      <input type="text" v-model.number="photo" />
    </div>

    <div>
      <span>爱好：</span>
      <input type="checkbox" v-model="hobby" value="敲代码" />敲代码
      <input type="checkbox" v-model="hobby" value="打麻将" />打麻将
      <input type="checkbox" v-model="hobby" value="发呆" />发呆
      <input type="checkbox" v-model="hobby" value="打篮球" />打篮球
    </div>

    <div>
      <span>介绍：</span>
      <textarea v-model.trim="intro"></textarea>
    </div>

    =================================================
    <div>
      姓名：{{ username }}
      <br />
      年龄：{{ age }}
      <br />
      所处地区：{{ { 1: '中国大陆', 2: '中国香港' }[area] }}
      <br />
      电话号码：{{ photo }}
      <br />
      爱好：{{ hobby }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      age: '',
      area: 1,
      photo: '',
      hobby: ['敲代码', '打麻将'],
      intro: '',
    };
  },
};
</script>

<style></style>
