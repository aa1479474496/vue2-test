<template>
    <div>
        <h1 class="text-center">validate3</h1>
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <label for="">用户名：</label>
                    <input  @keyup="test($event)" type="text" value="">
                </div>
                <div class="col-xs-4">
                    <label for="">编码：</label>
                    <input @keyup="test($event)" type="text" value="">
                </div>
                
               
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
               
            }
        },
        methods:{
           test(event) {
               console.log(event.keyCode);
               var value = event.currentTarget.value;
               if(value[0] == 0) {
                   event.currentTarget.value = 0;
                   return ;
               }
               console.log('old: ' , event.currentTarget.value);
               event.currentTarget.value=event.currentTarget.value.replace(/\D/g,'')
                console.log('new: ', event.currentTarget.value);
                
           }
           
        }
    }

</script>