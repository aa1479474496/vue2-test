//正则表
var regList = {
    imgCode: /^[0-9a-zA-Z]{4}$/,
    SmsCode: /^\d{4}$/,
    MailCode: /^\d{4}$/,
    UserName: /^[\w|\d]{4,16}$/,
    Password: /^[\w!@#$%^&*.]{6,16}$/,
    mobile: /^1[3|5|8]\d{9}$/,
    RealName: /^[\u4e00-\u9fa5 ]{2,10}$/,
    BankNum: /^\d{10,19}$/,
    Money: /^([1-9]\d*|0)$/,
    Answer: /^\S+$/,
    Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
}

var validate = {};
validate.install = function (Vue, options) {
    Vue.directive('va', {
        bind(el, binding, vnode) {
            // 逻辑...
            console.log(binding.value)
            console.log($(el));
            el.addEventListener('change', function(){
                // console.log('------');
                // console.log(el.value);
                // console.log(binding.value);
                // console.log('------');
            })
        },
        update(el, binding, vnode) {
            console.log(1);
            
            var reg = binding.arg,
                value = binding.value;
                if(!value) {
                return
            }
             var flag = regList[reg].test(value);
            //   console.log($(this));
             if(!flag) {
                // vnode.context.test(reg);
                $(el).addClass('warn').removeClass('success');
             } 
             else{
                  $(el).addClass('success').removeClass('warn');
             }  
             console.log(flag);
            //  console.log(vnode.context);
             
        }
  })
}

module.exports = validate;