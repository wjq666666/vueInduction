<template>
  <div>
    <input :type="type" :value="value" @input="oninput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    oninput(e) {
      this.$emit("input", e.target.value);
      //    this.$emit('update:value',e.target.value);
      // 通知校验
      this.$parent.$emit("validate");
    }
  }
};
</script>

<style></style>
