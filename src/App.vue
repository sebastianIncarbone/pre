<template>
  <div id="app">

    <background id="bg"/>
    <home id="bienvenida"/>
    <indice id="indice"/>
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
import indice from '@/components/indice.vue'

export default {
  components:{ 
    background,
    home,
    indice
  }  
}
</script>


<style>

  #bg{
    position: absolute;
    top:0px;
    left:0px;
    max-width: 98.5vw;
    overflow: hidden;
    z-index: -1;
  }

  #bienvenida{
    margin-top: 12vh;
  }
  
  #indice{
    margin-top: 97vh;  
  }

</style>
