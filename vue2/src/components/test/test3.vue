<template>
    <div class="doc" v-bind:class="{mb20:submitSign}">
        <img src="https://sf-static.b0.upaiyun.com/v-57e4f057/global/img/user-64.png" class = "imgh"  
            :style="{height:height+'px',width:width+'px',top:top+'px',left:left+'px'}"
            v-touch:pinch="scaling($event)" v-touch:pinchstart="scaling($event)" 
            v-touch:pan="panImg($event)" v-touch:panstart="panImg($event)">
        <div class="next">
            <div v-el:lll></div>
            <div><span v-el:mmm></span></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            height: null,
            width: null,
            initStatus: false,
            startItem: {
                height: null,
                width: null,
                offsetHeight: null,
                offsetWidth: null,
            },
            top: null,
            left: null,
            dX: null,
            dY: null,
            scaleItem: null,
            scaleStatus: false,
            initSize: null,
        }
    },
    methods:{
        scaling: function(e) {
            const scale = e.scale;
            /*if(scale<1){
                this.height = null;
                this.width = null;
                this.top = null;
                this.left = null;
                //this.initStatus = false;
                return false
            };*/
            if(e.type === "pinchstart"){
                if(!this.initStatus){
                    this.startItem = {
                        width: e.target.offsetWidth,
                        height: e.target.offsetHeight,
                        offsetWidth: e.target.offsetWidth,
                        offsetHeight: e.target.offsetHeight,
                    }
                    this.initStatus = true;
                } else {
                    this.startItem.offsetWidth = parseFloat(e.target.style.width);
                    this.startItem.offsetHeight = parseFloat(e.target.style.height);
                }
            }
            this.$els.mmm.textContent = 'MMM'+this.startItem.offsetWidth + 'px' +this.startItem.offsetHeight ;
            debugger
            let width = this.startItem.offsetWidth;
            let height = this.startItem.offsetHeight;
            if(this.width*scale<=this.startItem.width){
                this.height = this.startItem.height;
                this.width = this.startItem.width;
                this.top = 0;
                this.left = 0;
            } else {
                let bodyHeight = document.body.clientHeight;
                let bodyWidth = document.body.clientWidth;
                this.height = height*scale;
                this.width = width*scale;
                this.top = this.top?this.top*scale:0+e.center.y*(1-scale);
                this.left = this.left?this.left*scale:0+e.center.x*(1-scale);
            }
            this.$els.lll.textContent = 'QQQ' + this.top + 'px'+this.left+'px'+this.width+'px'+ this.startItem.width +'px';
        },
        panImg : function(e) {
            if(!this.initStatus) {
                return false
            }
            if(e.type==='panstart'){
                this.dY = this.top;
                this.dX = this.left;
            }
            let bodyHeight = document.body.clientHeight;
            let bodyWidth = document.body.clientWidth;
            let top = this.dY + e.deltaY;
            let left = this.dX + e.deltaX;/*
            this.top = top;//界定图片拖拽的上下边界
            this.left = left;//界定图片拖拽的左右边界*/
            this.top = top<0 ?((top<bodyHeight-this.height)?(bodyHeight-this.height):top):0;
            this.left =left<0 ? ((left<bodyWidth-this.width)?(bodyWidth-this.width):left):0;//界定图片拖拽的左右边界
        }//移动图片
    },
}
</script>

<style lang="less" scoped>
header {
    height: 2em;
    background-color: #2db7f5;
    opacity: 0.7;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
}
img {
    width: 100%;
}
.imgh {
    position: absolute;
}
.mb20 {
    margin-bottom: 60px;
}
.next {
    color: red;
    position:absolute;
    top: 50%;

    div{
        width: 100%;
        background-color: #333;
        height:100px;
    }
}
.tooltip {
    position: fixed;
    z-index: 999;

    .content {
        width: 86px;
        height: 40px;
        line-height: 2;
        color: #fff;
        text-align: center;
        background-color: #155092;
        border-radius: 6px;

        span {
            display: inline-block;
            margin: 4px 0;
        }

        .right-tip {
            border-left: 1px solid #999;
            padding-left: 5px;
            margin-left: -4px;
        }
    }
    .arrow {
        position: absolute;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 10px solid #155092;
        margin: -1px 0 0 -5px;
    }
}
.sign-img {
    position: fixed;
    z-index: 1000;
}
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    text-align: center;

    button {
        margin-top: 20px;
    }
}
</style>
