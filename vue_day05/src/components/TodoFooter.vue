<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ sum }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: istrue == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: istrue == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: istrue == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ['sum'],
  data() {
    return {
      istrue: 'all',
    };
  },

  methods: {
    change(val) {
      this.isTrue = val;
      this.$emit('filter', val);
    },
  },
};
</script>
