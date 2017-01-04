<template> 
    <div>
        <div class="container">
            <div class="row pt50">
                <div class="col-xs-6 col-xs-offset-2 clearfix"> 
                    <div class="dropdown pull-left ml10">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                            请选择
                            <span class="caret pull-right"></span>
                        </div>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                            <li>1</li>
                        </ul>
                    </div>
                    <div class="dropdown pull-left ml10">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                            请选择
                            <span class="caret pull-right"></span>
                        </div>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                            <li>1</li>
                        </ul>
                    </div>
                     <div class="dropdown pull-left ml10">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                            请选择
                            <span class="caret pull-right"></span>
                        </div>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                            <li>1</li>
                        </ul>
                    </div>
                </div>
            </div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th class="visible-lg">3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>11</td>
                        <td>12</td>
                        <td class="visible-lg">13</td>
                    </tr>
                     <tr>
                        <td>21</td>
                        <td>22</td>
                        <td class="visible-lg">23</td>
                    </tr>
                     <tr>
                        <td>31</td>
                        <td>32</td>
                        <td class="visible-lg">33</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .pt50 {
        padding-top: 50px;
    }
    .ml10 {
        margin-left: 10px;
    }
    .dropdown{
        width: 170px;
        border: 1px solid #e0e0e0;
        height: 38px;
        line-height: 38px;
        border-radius: 4px;
        padding-left: 6px;
    }
    .caret{
        margin-top: 16px;
        margin-right: 10px;
    }
    .dropdown-menu {
        width: 100%;
    }
    .dropdown-menu>li {
        padding-left: 6px;
        cursor: pointer;
    }
    .dropdown-menu>li:hover {
        background: #eee;
    }
    .table {
        margin-top: 40px;
        border: 1px solid #e0e0e0;
    }
    .table th,.table td{
        text-align: center;
    }
</style>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            this.getProvinceList()
        },
        methods: {
            getProvinceList() {
                this.$http.post('/appServer/bas/region/getCountryList', {countryCode: "0001"}).then((response) => {
                        console.log(response)

                }, (response) => {
                    // error callback
                });
            }
        }

    }


</script>
