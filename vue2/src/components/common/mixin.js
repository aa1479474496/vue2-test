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

var myMixin = {
    created: function() {
        // this.hello()
    },
    methods: {
        hello: function(abc) {
            console.log(abc)
        },
        check(regName, regValue) {
            return regList[regName].test(regValue);
        },
        checkAll(o) {
            var flag = true;
            if (!o || typeof o != 'object') {
                throw '数据格式错误';
                return false;
            }
            for (var i in o) {
                var f = this.check(i, o[i]);
                if(!f) {
                  flag = false
                }
                console.log('f:' + f);
            }
            return flag;
            
        }

    }
}

export { myMixin }