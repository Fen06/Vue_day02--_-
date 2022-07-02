<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="istrue" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, index) in list" :key="index">
        <td><input type="checkbox" v-model="item.v" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="reduce(item.name)">-</span
          ><input type="text" v-model="item.num" /><span
            @click="addFn(item.name)"
            >+</span
          >
        </td>
        <td>{{ item.price * item.num }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="once">删除选中商品</button>
    <button @click="clearFn">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数{{ shu }}</p>
      <tr v-for="(item, index) in buylist" :key="index">
        <th>
          <input type="checkbox" v-model="item.v" />{{ index + 1 }}
          {{ item.name }} {{ item.price * item.num }}
        </th>
      </tr>
      <p>总价{{ allprice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '奔驰',
          price: 52,
          num: 0,
          time: '2020-08-01',
          v: false,
        },
        {
          id: 2,
          name: '宝马',
          price: 65,
          num: 0,
          time: '2020-08-02',
          v: false,
        },
        {
          id: 3,
          name: '奥迪',
          price: 29,
          num: 0,
          time: '2020-08-03',
          v: false,
        },
      ],

      buylist: [],
    };
  },

  methods: {
    once() {
      if (this.list.v == false) {
        this.list.splice(1, 1);
      }
    },
    del(id) {
      const index = this.list.findIndex((ele) => {
        return id == ele.id;
      });
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },

    reduce(val) {
      const index = this.list.findIndex((ele) => {
        return ele.name == val;
      });
      // console.log('扣除');
      this.list[index].num--;
      // console.log(this.list[index]);
    },

    addFn(val) {
      // console.log('增加');
      const index = this.list.findIndex((ele) => {
        return ele.name == val;
      });
      this.list[index].num++;
    },

    clearFn() {
      this.buylist.splice(0, this.buylist.length);
      this.list.v = false;
      this.istrue = false;
    },
  },

  computed: {
    istrue: {
      set(val) {
        const index = this.list.findIndex((ele) => {
          return ele.name == val;
        });
        this.list.forEach((ele) => {
          ele.v = val;
          if (ele.v == true) {
            this.buylist.push(ele);
          }
          if (ele.v == false) {
            this.buylist.splice(index, 1);
          }
          // console.log(ele);
        });
      },
      get() {
        return this.list.every((ele) => ele.v === true);
      },
      // get(){

      // }
    },
    shu() {
      return this.list.reduce((sum, next) => {
        return (sum += next.num);
      }, 0);
    },

    allprice() {
      return this.list.reduce((sum, next) => {
        return sum + next.price * next.num;
      }, 0);
    },
  },
};
</script>

<style>
span {
  cursor: pointer;
}

#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
