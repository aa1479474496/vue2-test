<template>
    <div>
        <h1 class="text-center">validate</h1>
        <router-link :to="{path:'/validate/validate1'}">去validate1页面</router-link>
        <router-link :to="{path:'/validate/validate2'}">去validate2页面</router-link>
        <router-link :to="{path:'/validate/validate3'}">去validate3页面</router-link>
        <router-view></router-view>
    </div>
</template>