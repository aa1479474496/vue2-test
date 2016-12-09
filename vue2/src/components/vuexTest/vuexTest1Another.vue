<template>
    <div>
        <p>{{add.count}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                add: {
                    count: this.$store.state.count
                }
            }
        },
        computed: {
            // count() {
            //     return this.$store.state.count
            // }
        },


        methods: {
            increment() {
                var self = this;
                this.$store.commit('increment');
                this.$set(this.add, 'count', this.$store.state.count);
                setTimeout(function() {
                    console.log(self.$store.state.count)
                }, 0)
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    }
</script>