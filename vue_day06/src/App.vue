<template>
  <div>
    <BOOKMIN :item="list" @down="down"></BOOKMIN>
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
        params: {},
      }).then((res) => {
        console.log(res);
        // this.list = res;

        this.list = res.data.data;
      });
    },

    down(val) {
      this.list = val;
      
    },
  },

  mounted() {
    this.convert();
  },
};
</script>

<style></style>
