<template>
    <div>
        <p>vuexTest1mapState</p>
        <p>{{count}}</p>
        <p>{{countAlias}}</p>
        <p>{{addCount}}</p>
        <p>{{testToggle}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                nums: 100
            }
        },
        // computed: mapState({
        //     count: state => state.count,
        //     countAlias: 'count',
        //     addCount(state) {
        //         return state.count + this.nums
        //     }
        // }),
        computed: {
            testToggle() {
                return 124
            },
            ...mapState({
                count: state => state.count,
                countAlias: 'count',
                addCount(state) {
                    return state.count + this.nums
                }
            })
        },

        mounted() {
            // console.log(this.addCount);
            let a = {
                aa: 1
            };
            a = {...a,
                bb: 2
            };
            console.log(a);


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