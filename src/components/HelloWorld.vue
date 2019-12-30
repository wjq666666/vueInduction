<template>
  <div class="hello">
    <h1>{{ msg }} {{myAge}}岁</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: 'HelloWorld',
      myAge: '',
    }
  },
  mounted() {
    this.$parent.$on('WT', (age) => {
      console.log('监听WTest',age);
      this.myAge = age;
    });
    //this.$parent.$emit('HC', this.name)
    /* this.$parent.$on('HC', () => {
      console.log('监听HC');
    }); */
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
