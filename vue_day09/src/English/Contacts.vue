<template>
  <div>
    <ul>
      <li>
        <router-link to="/Contacts/a">ABCD</router-link>
      </li>
      <li><router-link to="/Contacts/b">EFGH</router-link></li>
      <li><router-link to="/Contacts/c">IJKL</router-link></li>
    </ul>
    <button @click="btn">展示</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
