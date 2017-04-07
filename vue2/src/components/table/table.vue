<template>
    <div style="padding:100px">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>品牌LOGO</th>
                    <th>品牌名称</th>
                    <th>业态</th>
                    <th>所属集团公司名称</th>
                    <th>最后修改人</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11111</td>
                    <td>22222222</td>
                    <td>333333</td>
                    <td>44444444</td>
                    <td>5555555555</td>
                </tr>
                <tr>
                    <td>11111</td>
                    <td>22222222</td>
                    <td>333333</td>
                    <td>44444444</td>
                    <td>5555555555</td>
                </tr>
                <tr>
                    <td>11111</td>
                    <td>22222222</td>
                    <td>333333</td>
                    <td>44444444</td>
                    <td>5555555555</td>
                </tr>
                <tr>
                    <td colspan="5">
                        <test-table></test-table>
                    </td>
                </tr>
                <tr>
                    <td>11111</td>
                    <td>22222222</td>
                    <td>333333</td>
                    <td>44444444</td>
                    <td>5555555555</td>
                </tr>
                <tr>
                    <td>11111</td>
                    <td>22222222</td>
                    <td>333333</td>
                    <td>44444444</td>
                    <td>5555555555</td>
                </tr>
                <tr>
                    <td>11111</td>
                    <td>22222222</td>
                    <td>333333</td>
                    <td>44444444</td>
                    <td>5555555555</td>
                </tr>
            </tbody>
            <table>
    </div>
</template>

<script>
    export default {
         components: {
        	
            testTable: require('./testTable.vue'),

        },
    }
</script>
