import Vue from 'vue';
//Vue.extend()注册一个组件，同时实例化Vue,可以自行打印ToastConstructor看看,同时对比methods方法中的this看看,可发现两者是相同的
const ToastConstructor = Vue.extend(require('./toast.vue'));
let toastPool = [];
/*
instance是Vue对象
*/
let getAnInstance = () => {
    // 销毁Vue对象，只取第一个Vue对象
    
    if (toastPool.length > 0) {
         debugger;
        let instance = toastPool[0];
        toastPool.splice(0, 1);
       
        return instance;
    }
    //el表示将组件挂载到的div主体上
    return new ToastConstructor({
        el: document.createElement('div')
    });
     
};

let returnAnInstance = instance => {
   
    if (instance) {
        toastPool.push(instance);
    }
};

let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};
//原型方法
ToastConstructor.prototype.close = function() {
    // console.log(this.test);
    //修改视图boolean值，将Toast视图隐藏
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    this.closed = true;
    returnAnInstance(this);
};
//防止options变成undefined,同时传递一个{}对象参数
let Toast = (options = {}) => {

    // console.log(ToastConstructor)

    let duration = options.duration || 3000;

    let instance = getAnInstance();
    console.log(instance)
    instance.closed = false;
    clearTimeout(instance.timer);
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle';
    instance.className = options.className || '';
    instance.iconClass = options.iconClass || '';

    document.body.appendChild(instance.$el);
    //nextTick表示Dom更新后触发的方法
    Vue.nextTick(function() {
        //修改Boolean值达到显示Toast
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        //删除Toast的提示文件
        instance.timer = setTimeout(function() {
            if (instance.closed) return;
            instance.close();
        }, duration);
    });
    return instance;
};
//暴露Toast接口
export default Toast;