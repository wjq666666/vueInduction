<template>
  <div>
    <div class="box" v-if="isShow">
      <p class="title">{{ title }}</p>
      <p class="content">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    console.log(this.title, this.message);
  },
  methods: {
    Show() {
      this.isShow = true;
      /* setTimeout(() => {
        this.Hide();
      }, this.duration); */
    },
    Hide() {
      this.isShow = false;
      this.remove();
    }
  }
};
</script>

<style scoped>
.box {
  position: fixed;
  width: 50%;
  height: 100px;
  top: 50%;
  left: 25%;
  text-align: center;
  margin-top: -100px;
  pointer-events: none;
  background-color: #fff;
  border: grey 3px solid;
  box-sizing: border-box;
}
.content {
  width: 200px;
  margin: 10px auto;
  font-size: 14px;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>
