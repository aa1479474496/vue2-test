<template> 
    <div>
        <h3>mixin的使用</h3>
    </div>
</template>

<script>
    import {myMixin} from '../common/mixin.js'
    export default {
        data() {
            return {
                name:'mixin测试'
            }
        },
        mixins: [myMixin],
        mounted() {
            this.hello(this.name)
        }
    }
</script>