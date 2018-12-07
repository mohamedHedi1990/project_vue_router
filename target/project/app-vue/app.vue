<template>
    <div id="project-wrap"> 
        <!--<router-link to="/salut">salut</router-link>-->
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


