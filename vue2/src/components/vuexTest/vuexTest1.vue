<template>
    <div>
        <p>vuexTest1</p>
        <p>{{count}}</p>
        <p>{{addCount}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nums: 10
            }
        },
        computed: {
            count() {
                return this.$store.state.count
            },
            addCount() {
                return this.$store.state.count + this.nums
            }
        },


        methods: {
            increment() {
                var self = this;
                this.$store.commit('increment');
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    }
</script>