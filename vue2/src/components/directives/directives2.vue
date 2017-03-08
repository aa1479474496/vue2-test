<template>
    <div>
        <h3>指令2页面,注册局部指令</h3>
        <div>
            <input type="text" v-focus1  class="dir2"/>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            focus1: {
                // 指令的定义---
                inserted: function (el) {
                    // 聚焦元素
                    el.focus()
                    console.log(el)
                }
            }
        }
    }
</script>