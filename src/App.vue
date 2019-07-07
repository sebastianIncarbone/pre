<template>
  <div id="app">

    <background id="bg"/>
    <home id="bienvenida"/>
  
    <!--
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/> 
    -->
  
  </div>
</template>

<script>
import background from '@/components/Background.vue'
import home from '@/components/Home.vue'

export default {
  components:{ 
    background,
    home
  }  
}
</script>


<style>

  #bg{
    position: absolute;
    top:0px;
    left:0px;
    max-width: 90vw;
    z-index: -1;
  }

  #bienvenida{
    margin-top: 12vh;
  }
  
</style>
