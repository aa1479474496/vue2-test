<template>
    <div>
        <p>actions</p>
        <p>{{count}}</p>
        <p>{{countAlias}}</p>
        <p>{{addCount}}</p>
        <p>{{testToggle}}</p>
        <p>来自getters---->{{doneTodos}}---->长度为{{doneTodosCount}}</p>
        <button @click="addincrement">+</button>
        <button @click="adddecrement">-</button>
        <button @click="addcounte2(11)">{{count2}}</button>
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
        mapActions
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
                count2: state => state.count2,
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
            ...mapActions({
                addincrement: 'incrementTest',
                adddecrement: 'decrementTest'
            }),
            addcounte2(n) {
                var self = this;
                self.$store.dispatch('paramsTest', n) //带参数传递 的情况
            }

            // 不使用mapActions的做法
            // addincrement() {
            //     var self = this;
            //     this.$store.dispatch('incrementTest');
            // },
            // adddecrement() {
            //     this.$store.dispatch('decrementTest')
            // }
        }
    }
</script>