<template>
  <div>
    <BOOKMIN :item="list" @del="del" @down="down"></BOOKMIN>
    <BOOKPOST></BOOKPOST>
  </div>
</template>

<script>
import BOOKMIN from './components/BOOKMIN.vue';
import BOOKPOST from './components/BOOKPOST.vue';
export default {
  data() {
    return {
      list: [],
      created() {},
    };
  },

  components: {
    BOOKMIN,
    BOOKPOST,
  },

  methods: {
    convert: function () {
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
      }).then((res) => {
        console.log(res);
        // this.list = res;

        this.list = res.data.data;
      });
    },

    // down(val){

    // },

    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);

      this.list.splice(index, 1);
      console.log(index);
    },

    down(val) {
      // console.log(this.list[index]);
      console.log(val);

      if (val == this.list.bookname) {
        alert(11111);
      } else {
        alert('没找到');
      }
    },

    // add(val) {
    //   // console.log(typeof val);
    //   this.list.push(val);
    // },
  },

  mounted() {
    this.convert();
  },
};
</script>

<style></style>
