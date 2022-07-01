<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option :value="1">男</option>
        <option :value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">{{ isEnter ? '修改' : '添加' }}</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ { 0: '女', 1: '男' }[item.sex] }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="eitd(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          name: 'Tom',
          age: '25',
          sex: 0,
        },
        {
          id: 2,
          name: 'Jone',
          age: '21',
          sex: 0,
        },
        {
          id: 3,
          name: '小李',
          age: '18',
          sex: 1,
        },
      ],
      name: '',
      age: '',
      sex: 0,
      isEnter: false,
      current: '',
    };
  },
  methods: {
    addFn() {
      if (this.isEnter) {
        const index = this.arr.findIndex((val) => val.id == this.current);
        this.arr[index].name = this.name;
        this.arr[index].age = this.age;
        this.arr[index].sex = this.sex;
        this.current = '';
        this.isEnter = false;
        this.clear();
        alert('修改成功');
        return;
      }
      if (this.name == '' || this.age == '') {
        return alert('内容不能为空');
      }

      const id = this.arr[this.arr.length - 1]
        ? this.arr[this.arr.length - 1].id + 1
        : 1;

      this.arr.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
      this.clear();
      alert('添加成功');
    },

    eitd(data) {
      this.isEnter = true;
      this.name = data.name;
      this.age = data.age;
      this.sex = data.sex;
      this.current = data.id;
    },

    del(id) {
      const index = this.arr.indexOf((val) => {
        return id == val.id;
      });

      this.arr.splice(index, 1);
    },
    clear() {
      this.name = '';
      this.age = '';
      this.sex = 0;
    },
  },
};
</script>
