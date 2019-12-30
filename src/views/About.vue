<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <WTest title="关于春节放假通知" :msg="msg" ref="test">
      <template v-slot:title>标题</template>
      <template v-slot:content="{age}">内容...{{age}}</template>
    </WTest>
    <!-- <div>{{content}}</div> -->
  </div>
</template>
<script>
import WTest from "../components/WTest";
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "About",
  components: {
    WTest,
    HelloWorld
  },
  provide() {
    return {
      address: '北京市西城区'
    }
  },
  data() {
    return {
      msg: "2019年12月30日",
      content: '',
    };
  },
  mounted() {
    this.$refs.test.time = '2019年12月31日下午五点';
    this.msg = '2020年1月17日 - 2020年2月2日';
    this.$children[0].time = "2019年12月31日下午七点";
  },
  methods: {
    /* timeChange(a) {
      this.content = ++a;
      console.log(a);
    } */
  },
};
</script>
