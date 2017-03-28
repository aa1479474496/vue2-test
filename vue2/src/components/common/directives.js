import Vue from 'vue'
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  bind: function(el, binding) {
    el.style.borderColor = binding.value;
    console.log(binding.arg)
    console.log(this)
  },
  inserted: function (el) {
    // 聚焦元素
    el.focus()
    console.log(el)
  }
})