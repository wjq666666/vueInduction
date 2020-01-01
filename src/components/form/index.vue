<template>
  <div>
    <!-- <WInput :value="model.username" @input="model.username = $event"></WInput> -->
    <!-- <WInput :value.sync="model.username"></WInput> -->
    <WForm :model="model" :rules="rules" ref="loginForm">
      <WFormItem label="用户名" prop="username">
        <WInput v-model="model.username" type="text" placeholder="请输入用户名"></WInput>
      </WFormItem>
      <WFormItem label="密码" prop="password">
        <WInput v-model="model.password" type="password" placeholder="请输入密码"></WInput>
      </WFormItem>
      <WFormItem>
        <button @click="submit">登录</button>
      </WFormItem>
    </WForm>
    <div>{{model}}</div>
  </div>
</template>

<script>
import WInput from "@/components/form/WInput.vue";
import WFormItem from "@/components/form/WFormItem.vue";
import WForm from "@/components/form/WForm.vue";
export default {
  components: {
    WInput,
    WFormItem,
    WForm
  },
  data() {
    return {
      model: { username: "", password: "" },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  methods: {
      submit() {
          this.$refs.loginForm.validate(isvalidate => {
              if (isvalidate) {
                  alert('登陆中')
              } else {
                  alert('重新输入');
              }
          })
      }
  },
};
</script>

<style>
</style>