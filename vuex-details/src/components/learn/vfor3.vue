<template>
    <div>
        <h1>3</h1>
        <ul>
            <li v-for="(item, index) in devstudent">{{index}} -- {{item}}</li>
        </ul>
        <hr />
        <ul>
            <li v-for="(item, index) in devst">
                {{index}} -- {{item.name}} -- {{item.age}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                student: [55,5,78,96,12,22],
                devstudent: '',
                st: [
                    {name:'taobao',age:'35'},
                    {name:'sohu',age:'25'},
                    {name:'sina',age:'15'},
                    {name:'youku',age:'55'},
                ]
            }
        },
        computed: {
            devstudent() {
                return this.student.sort(this.sortNumber)
            },
            devst() {
                return this.sortByKey(this.st, 'age')
            }
        },
        methods: {
            sortNumber(a, b) {
                return a - b;
            },
            sortByKey(array, key) {
                return array.sort(function(a, b){
                    var x = a[key],
                        y = b[key];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));     
                });
            }
        }
    }
</script>
