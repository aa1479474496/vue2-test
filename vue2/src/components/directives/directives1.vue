<template>
    <div>
        <h3>指令1页面</h3>
        <div>
            <input type="text" v-focus:borderColor.a.b="color1" class="dir1"/>
            <input type="text" v-focus:borderColor.a.b="color2" class="dir1"/>
            
        </div>
    </div>
</template>

<style scoped>
    input {
        border: 1px solid pink;
        outline: none;
    }
    input:focus {
         outline: none;
    }
</style>

<script>
    export default {
        data() {
            return {
                color1: 'red',
                color2: 'yellow',
            }
        }
    }
</script>