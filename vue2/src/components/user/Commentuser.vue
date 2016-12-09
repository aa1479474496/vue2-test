<template>
	 <transition name="slide-right">
	  	<div>User {{ $route.params.id }}</div>
	</transition>
	<!-- <div>User {{ $route.params.id }}</div> -->
</template>

<script>
    export default {
        data() {
            return {
                myId: this.$route.params.id
            }
        },
        mounted: function() {
            console.log(this.myId)
        }
    }
</script>