<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">
        <span>{{ item }} </span>

        <button @click="del(item.id)">删除</button>
      </li>
      <br />
      <button @click="sc">生成</button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 3],
    };
  },

  methods: {
    sc() {
      const creat = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      this.arr.push(creat(1, 10));
    },

    del(id) {
      const index = this.arr.indexOf((tx) => {
        return id == tx.id;
      });

      this.arr.splice(index, 1);
    },
  },
};
</script>

<style></style>
