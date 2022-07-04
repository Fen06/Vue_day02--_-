<template>
  <tr>
    <td>{{ info.id }}</td>
    <td>{{ info.bookname }}</td>
    <td>{{ info.author }}</td>
    <td>{{ info.publisher }}</td>
    <td><a href="javascript:;">删除</a><a href="javascript:;">详情</a></td>
  </tr>
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
