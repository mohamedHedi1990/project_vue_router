<template>
    <div id="project-wrap"> 
 <transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>

    </div>
    
</template>
<script>
    import testVue from './testVue.vue';
    

    export default {
        name: 'App',
        components: {
            
        }
    }
</script>
<style>

   
</style>


