<template>
       <div>
            router test!!!!!   
        </div>   
</template>
<script>
export default {
  data () {
    return {
          
    };
  },
  mounted() {
      console.log(this.$route.params);
  }
}
</script>