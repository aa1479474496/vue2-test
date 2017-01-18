<template>
    <div>
        <div class="calendarModal"  @click="cancel()"></div>
        <div id="zcalendar-box" class="clearfix">
            <div class="calendar-month wid_50 fl">
                <div class="calendar-title">{{year}}-{{month}}</div>
                <ul class="calendar-week">
                    <li class="pink">日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li class="pink">六</li>
                </ul>
                <ul class="calendar-day">
                    <li v-for="day in days" :key="day.id"
                         :class="[{'overdue_date':day.beforeNowFlag},{'show_date':day.showDateFlag},{'sec_date':day.secDateFlag}]"
                         @click="seclect(day)">
                        <span>{{day.name}}</span>
                    </li>
                </ul>
            </div>
             <div class="calendar-month wid_50 fl">
                <div class="calendar-title">{{nextYear}}-{{nextMonth}}</div>
                <ul class="calendar-week clearfix">
                    <li class="pink">日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li class="pink">六</li>
                </ul>
                <ul class="calendar-day clearfix">
                    <li v-for="day in nextDays" :key="day.id"
                         :class="[{'overdue_date':day.beforeNowFlag},{'show_date':day.showDateFlag},{'sec_date':day.secDateFlag}]"
                        @click="seclect(day)">
                        <span>{{day.name}}</span>
                    </li>
                </ul>
            </div>
             <div class="clear_date">
                <span class="clear_span" @click="clear">清空日期</span>
                <span>{{errorMsg}}</span>
                <span class="fr close_date" @click="cancel()">关闭</span>
             </div>
             <span class="cal_pre" @click="prev()"></span>
             <span class="cal_next" @click="next()"></span>
        </div>
    </div>
</template>

<script>
    require('./../../assets/css/calendarDouble.css')
    export default {
        props: {
            calendarData: {
                beforeNowFlag: '',
                afterNowFlag: '',
                occupyDays: [],//不可选的集合
                startDate: '',
                endDate: '',
                minDays: ''
            },
        },
        data() {
            return {
                year: '',
                month: '',
                days: [],//每个月的天数
                nextYear: '',
                nextMonth: '',
                nextDays: [],
                startDate: '',//选中的开始日期
                endDate: '',//选中的结束日期
                currentDate: '',//今天
                showDateFlag: '',//是否可以选
                clearPrevSeclte: [],//清除集合里日期的样式
                daysList: [],//本月和下月的日期集合
                errorMsg: ''
            }
        },
        // computed: {
        //     daysList: function(){
        //         return this.days.concat(this.nextDays)
        //     }
        // },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let d = new Date();
                this.year = d.getFullYear();
                this.month = d.getMonth() + 1;

                this.startDate = this.calendarData.startDate;
                this.endDate = this.calendarData.endDate;

                if(this.month == 12){
                    this.nextMonth = 1;
                    this.nextYear = this.year + 1;
                }
                else{
                    this.nextMonth = this.month + 1;
                    this.nextYear = this.year;
                }

                this.currentDate = this.year + '-' + this.zero(this.month) + '-' + this.zero(d.getDate());
                this.days = this.render(this.year, this.month);
                this.nextDays = this.render(this.nextYear, this.nextMonth);
            },
            //渲染日期
            render(y, m) {
                let firstDayOfMonth = new Date(y, m-1, 1).getDay();//当月的第一天星期几
                let lastDateOfMonth = new Date(y, m , 0).getDate();//当月最后一天多少号，即这个月有多少天
                let temp = [];

                for(let i = 0; i < firstDayOfMonth; i++) {
                    temp.push({});
                }

                for(let i = 1; i <= lastDateOfMonth; i++) {
                    let day = {};
                    day.name = i;
                    day.nameCopy = i;
                    day.ymd = y + '-' + this.zero(m) + '-' + this.zero(i);
                    day.beforeNowFlag = false; //默认进来都是可选的
                    day.showDateFlag = true;
                     //
                     if(this.startDate != this.endDate) {
                         if(this.startDate == day.ymd){
                            day.name = '开始';
                        }
                        if(this.endDate == day.ymd){
                            day.name = '结束';
                        }
                     }
                    
                    if(this.currentDate == day.ymd) {
                        day.name = '今天';
                        day.nameCopy = '今天';
                    }
                    else if(this.currentDate >　day.ymd) {
                        if(!this.calendarData.beforeNowFlag){
                            //小于今天的日期，并且传过来的参数要求是小于今天的不能选
                            day.beforeNowFlag = true;
                            day.showDateFlag = false;
                        }
                        else{
                            day.beforeNowFlag = false;
                            day.showDateFlag = true;
                        }
                        
                    }
                    else if(this.currentDate <　day.ymd) {
                        if(this.calendarData.afterNowFlag){
                            //大于今天的日期，并且传过来的参数要求是大于今天的可以选
                            day.beforeNowFlag = false;
                            day.showDateFlag = true;
                        }
                        else{
                            day.beforeNowFlag = true;
                            day.showDateFlag = false;
                        }
                    }
                    if(this.calendarData.occupyDays.indexOf(day.ymd) != -1){
                        //传过来的集合里有不能选的日期
                        day.showDateFlag = false;
                        day.beforeNowFlag = true;
                    }
                    if(this.startDate <= day.ymd && this.endDate >= day.ymd && day.showDateFlag) {
                        day.secDateFlag = true;
                        this.clearPrevSeclte.push(day);
                    }
                    temp.push(day);
                }
                
                return temp;
                
            },
            zero(d) {
                return d < 10? '0' + d : d;
            },
            // 切换上个月的日期
            prev() {
                 this.nextMonth = this.month;
                 this.nextYear = this.year;
                 this.nextDays = this.days;
                 if(this.month == 1) {
                     this.month = 12;
                     this.year -= 1; 
                 }
                 else {
                      this.month -= 1; 
                 }
                this.days = this.render(this.year, this.month);
            },
            next() {
                this.month = this.nextMonth;
                this.year = this.nextYear;
                this.days = this.nextDays;
                if(this.nextMonth == 12){
                    this.nextMonth = 1;
                    this.nextYear = this.year + 1;
                }
                else{
                    this.nextMonth += 1;
                }
                this.nextDays = this.render(this.nextYear, this.nextMonth);
            },
            seclect(day) {
                if(!day.showDateFlag){return;}
               
                if(!this.startDate && !this.endDate) {
                    day.name = '开始';
                    this.startDate = day.ymd;
                    this.clearPrevSeclte.push(day);
                    day.secDateFlag = true;
                }else if(this.startDate && !this.endDate) {
                    if(this.startDate > day.ymd){
                        this.clearName();
                        this.clearSecDate();
                        day.name = '开始';
                        this.startDate = day.ymd;
                        day.secDateFlag = true;
                        this.clearPrevSeclte.push(day);
                    }
                    else{
                        let flag = this.checkOccupyDays(day.ymd);
                        if(flag == false) {
                            this.errorMsg = '包含不可选择日期';
                            return;
                        }
                        let minDaysFlag = this.checkMinDays(day.ymd);
                         if(minDaysFlag == false) {
                            this.errorMsg = `${this.calendarData.minDays}天起租`;
                            return;
                        }
                        this.checkMinDays(day.ymd)
                        if(this.startDate == day.ymd){
                            day.name = day.nameCopy
                        }
                        else {
                            day.name = '结束';
                        }

                        this.endDate = day.ymd;
                        this.secDays();
                        this.$emit('setDate',this.startDate,this.endDate);
                        this.$emit('closeCalendarDouble');
                    }
                   
                }
                else if(this.startDate && this.endDate) {
                    this.clearName();
                    this.clearSecDate();
                    day.name = '开始';
                    this.startDate = day.ymd;
                    this.endDate = '';
                    day.secDateFlag = true;
                    this.clearPrevSeclte.push(day);
                }
                
            },
            //开始，结束符合条件中的日期变红色
            secDays() {
                this.daysList = this.days.concat(this.nextDays);
                let secDasLength = this.daysList.length;
                for(let i = 0; i < secDasLength; i++) {
                    if(this.daysList[i].ymd >= this.startDate && this.daysList[i].ymd <= this.endDate){
                        this.clearPrevSeclte.push(this.daysList[i])
                    }
                }
                this.showDate();
            },
            showDate() {
                let length = this.clearPrevSeclte.length;
                for(let i = 0; i < length; i++) {
                    this.clearPrevSeclte[i].secDateFlag = true;
                }
            },
            //判断不可选日期是否在startDate和现在选中的日期之间
            checkOccupyDays(nowDate) {
                let length = this.calendarData.occupyDays.length;
                if(length > 0) {
                    for (var i = 0; i < length; i++) {
                        if(this.calendarData.occupyDays[i] > this.startDate && this.calendarData.occupyDays[i] < nowDate) {
                            return false;
                        }
                    }
                }
            },
            //判断选择的日期是否大于开始日期加上最小天数
            checkMinDays(nowDate) {
                if(this.calendarData.minDays > 0) {
                    let arr = this.startDate.split('-');
                    let d = new Date(arr[0],parseInt(arr[1])-1,parseInt(arr[2])+parseInt(this.calendarData.minDays)-1).getTime();
                    let n = new Date(nowDate).getTime();
                    if(n < d) {
                         return false
                    }
                }
            },
            // 已有开始，结束，再选重新开始，则把上次的样式清掉
            clearSecDate() {
                for (var i = 0; i < this.clearPrevSeclte.length; i++) {
                    this.clearPrevSeclte[i].secDateFlag = false;
                }
                this.clearPrevSeclte = [];
            },
            clearName(){
                for(var i = 0;i < this.days.length;i++){
                    this.days[i].name =  this.days[i].nameCopy;
                }
                for(var i = 0;i < this.nextDays.length;i++){
                    this.nextDays[i].name = this.nextDays[i].nameCopy;
                }
            },
            //清掉所有选中的样式
            clear() {
                this.errorMsg = '';
                this.startDate = '';
                this.endDate = '';
                this.clearName();
                this.clearSecDate();
                this.$emit('setDate','','');
            },
            //关闭
            cancel() {
                this.$emit('closeCalendarDouble');
            }
        },
        // watch: {
        //     'days': function() {
        //         if(this.clearPrevSeclte.length > 0) {
        //             this.showDate();
        //         }
        //     },
        //     'nextDays': function() {
        //         if(this.clearPrevSeclte.length > 0) {
        //             this.showDate();
        //         }
        //     }
        // }
    }
</script>