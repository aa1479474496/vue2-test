<template>
    <div>
        <p>Mutations</p>
        <p>{{count}}</p>
        <p>{{countAlias}}</p>
        <p>{{addCount}}</p>
        <p>{{testToggle}}</p>
        <p>来自getters---->{{doneTodos}}---->长度为{{doneTodosCount}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    // import {
    //     mapState
    // } from 'vuex'
    // import {
    //     mapGetters
    // } from 'vuex'
    // import {
    //     mapMutations
    // } from 'vuex'

    import {
        mapState,
        mapGetters,
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                nums: 100
            }
        },
        computed: {
            testToggle() {
                return 124
            },
            ...mapGetters([
                'doneTodos',
                'doneTodosCount'
            ]),
            ...mapState({
                count: state => state.count,
                countAlias: 'count',
                addCount(state) {
                    return state.count + this.nums
                }
            })

        },

        mounted() {
            console.log(this.addCount);
        },

        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
            //不使用mapMutations的方法
            // increment() {
            //     var self = this;
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement')
            // }
        }
    }
</script>