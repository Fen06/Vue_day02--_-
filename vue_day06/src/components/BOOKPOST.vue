<template>
  <div>
    <input
      type="text"
      placeholder="书名"
      v-model="NewBook.bookname"
    /><br /><br />
    <input
      type="text"
      placeholder="作者"
      v-model="NewBook.author"
    /><br /><br />
    <input
      type="text"
      placeholder="出版社"
      v-model="NewBook.publisher"
    /><br /><br />
    <button @click="add">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NewBook: {
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },

  methods: {
    add() {
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...this.NewBook,
        },
      }).then((res) => {
        console.log(res);
        alert(res.data.msg + '，请刷新显示');
        this.NewBook.newbook = '';
        this.NewBook.newauthor = '';
        this.NewBook.newXXX = '';
      });
    },
  },
};
</script>

<style></style>
