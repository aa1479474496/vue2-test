<template>
    <div>
        <form class="form-horizontal" role="form" style="margin-top: 50px;">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 col-sm-offset-2 control-label">选择时间</label>
                <div class="col-sm-2">
                    <input type="text" 
                        v-model="secDays"
                        @click="calendarDouble.flag = !calendarDouble.flag" 
                        class="form-control" id="inputEmail3" 
                        placeholder="选择时间">
                    <calendar-double :calendar-data = "calendarData" v-if="calendarDouble.flag"
                                     @closeCalendarDouble="closeCalendarDouble"
                                     @setDate="setDate">
                    </calendar-double>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 col-sm-offset-2 control-label">Password</label>
                <div class="col-sm-2">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
        </form>
       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                calendarData: {
                    beforeNowFlag: true,//默认今天以前的不能选，改为true可以选
                    afterNowFlag: true,//默认今天以后的可以选，改为false不能选
                    occupyDays: ['2016-12-30','2017-01-02','2017-01-21','2017-02-02'],//不可租的日期集合
                    startDate: '',
                    endDate: '',
                    minDays: 3,
                },
                calendarDouble: {
                    flag: false
                },
                secDays: ''
               
            }
        },
        components: {
            'calendarDouble': require('./../common/calendarDouble.vue')
        },
        mounted() {
           
        },
        methods: {
            closeCalendarDouble() {
                this.calendarDouble.flag = false;
            },
            setDate(startDate,endDate) {
                this.calendarData.startDate = startDate;
                this.calendarData.endDate = endDate;
                this.secDays = startDate + '至' +  endDate;
            }
           
          
        }
    }
</script>