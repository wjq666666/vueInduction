import Vue from 'vue';

function create(Component, props) {
  // 创建vue实例
  const  vm = new Vue({
    render(h) {
      return h(Component, {props});
    }
  }).$mount();

  // 将生成的dom追加到body
  console.log(vm.$el);
  document.body.appendChild(vm.$el);

  // 给组件实例添加销毁方法
  console.log(vm.$children[0]);
  const comp = vm.$children[0];
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }
  return comp;
}
export default create;