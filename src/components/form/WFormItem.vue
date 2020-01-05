<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      console.log("开始校验");
      // 1.获取 数值 和 校验规则
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      // 2. 创建校验规则
      const schema = new Schema({ [this.prop]: rules });
      // 校验返回promise
      return schema.validate({ [this.prop]: value }, error => {
        if (error) {
          this.error = error[0].message;
        } else {
          this.error = "";
        }
      });
    }
  }
};
</script>

<style scoped>
</style>