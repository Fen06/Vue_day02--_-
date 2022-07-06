<template>
  <div>
    <Table>
      <template v-slot:name0>
        <!-- <input type="text" /> -->
      </template>
      <template v-slot:name="scoped">
        <input type="text" v-model="scoped.row.name" />
      </template>

      <template v-slot:age0>
        <!-- <input type="text" v-model="scoped.row.sizeage" /> -->
      </template>

      <template v-slot:age="scoped">
        <input type="text" v-model="scoped.row.age" />
      </template>

      <template v-slot:toux1="scoped">
        <a href="#">{{ scoped.row.headImgUrl }}</a>
        <!-- <input type="text" v-model="scoped.row.headImgUrl" /> -->
      </template>

      <template v-slot:toux2="scoped">
        <img :src="scoped.row.headImgUrl" alt="" />
        <!-- <input type="text" v-model="scoped.row.headImgUrl" /> -->
      </template>

      <template v-slot:toux3="scoped">
        {{ scoped.row.headImgUrl }}
      </template>

      <template v-slot:type="scoped">
        {{ scoped.row.type }}
      </template>
    </Table>
  </div>
</template>

<script>
import Table from './components/渲染表单数据/Table.vue';
export default {
  components: {
    Table,
  },

  methods: {},
};
</script>

<style></style>
