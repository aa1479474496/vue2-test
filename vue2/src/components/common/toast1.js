// var Toast = {};
// Toast.install = function (Vue, options) {
//     Vue.prototype.$toastMsg = 'Hello World';
// }
// module.exports = Toast;


var Toast1 = {};
Toast1.install = function(Vue, options) {
    let opt = {
        defaultType: 'center',
        duration: '2000'
    }

    for (let property in options) {
        opt[property] = options[property];
    }

    Vue.prototype.$toast1 = (tips, type) => {
        if (type) {
            opt.defaultType = type;
        }
        if (document.getElementsByClassName('vue-toast').length) {
            return;
        }

        let temp = `<div class="toast-box toast-${type}">
                        <div class="toast-mask"  @click="removeToast($event)"></div>
                        <div class="vue-toast">
                            <h4 class="toast-title"> 提示信息
                                <div class="close-span pull-right" @click="removeToast($event)">X</div>
                            </h4>
                            <div class="toast-content">${tips}</div>
                        </div>
                    </div>
                    `;
        let toastTpl = Vue.extend({
            template: temp,
            methods: {
                removeToast(e) {
                    // console.log(e.target.parentNode);
                    document.body.removeChild(tpl) ;
                }
            }
        });
        let tpl = new toastTpl().$mount().$el;
        document.body.appendChild(tpl);
       
        setTimeout(() => { 
                
                document.body.removeChild(tpl) ;
            }, 
            opt.duration)
        
    }, ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast1[type] = (tips) => {
            return Vue.prototype.$toast1(tips, type)
        }
    })
}

module.exports = Toast1;