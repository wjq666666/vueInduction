<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      //获取校验项
      const tasks = this.$children
        .filter(item => item.prop) // 只校验有prop属性的formItem，去除登录按钮的校验
        .map(item => item.validate());
      // 判断所有项必须全部通过
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style scoped>
</style>