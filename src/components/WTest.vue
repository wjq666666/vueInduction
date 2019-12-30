<template>
  <div>
    <div>元旦放假时间为：{{time}}</div>
    <div>{{ $attrs.title }}</div>
    <div>{{ msg }}</div>
    <div>地址：{{address}}</div>
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="content" :age="age"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WTest",
  props: {
    msg: String
  },
  inject: ['address'],
  data() {
    return{
      time: '2020年1月1日',
      count: 1,
      age: 28,
      myName: '',
    }
  },
  mounted() {
    this.$parent.$emit('WT', this.age);
    //this.$emit('change', this.count);
    /* this.$parent.$on('HC', (name) => {
      console.log('监听HC', name);
      this.myName = name;
    }); */
    
  }
};
</script>

<style></style>
