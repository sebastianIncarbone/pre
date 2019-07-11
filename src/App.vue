<template>
  <div id="aplication">

    <background id="bg"/>
    <home id="bienvenida"/>
    <indice id="indice"/>
    <linksDeEjemplos id="linksDeEjemplos"/>
    <about id="about"/>
    <menuIcon id="menu"/>

  </div>
</template>

<script>
import background from '@/components/Background.vue'
import menuIcon from '@/components/MenuIcon.vue'
import home from '@/components/Home.vue'
import indice from '@/components/Indice.vue'
import linksDeEjemplos from '@/components/LinksDeEjemplos.vue'
import about from '@/components/About.vue'

export default {
  components:{ 
    background,
    menuIcon,
    home,
    indice,
    linksDeEjemplos,
    about,
  }  
}
</script>


<style>
/*
 *
 *  font-family: 'Roboto', sans-serif;
 *  font-family: 'Oswald', sans-serif;
 *
 */
  @media (min-width: 901px) {
    #aplication{ 
      margin-top: 4em;
      max-width: 98.7vw;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10vh;
      grid-auto-rows: minmax(80vh,auto);
      justify-items: center;
      align-items: flex-start;
    }
  }

  @media (max-width: 900px) {
    #aplication{ 
      max-width: 98.7vw;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10vh;
      grid-auto-rows: minmax(50vh,auto);
      justify-items: center;
      align-items: center;
    }
  }

  #bg{
    position: absolute;
    top:0px;
    left:0px;
    max-width: 98.7vw;
    overflow: hidden;
    z-index: -1;
  }

  #menu{
    position: fixed;
    top:20px;
    right: 20px;
    width: 35px;
    height: 35px;
  }

  #bienvenida{
    /* position:relative;
    top:12vh; */
  }
  
  #indice{
    /* position:relative;
    top:80vh; */
  }

  #linksDeEjemplos{
    /* position:relative;
    top:-20vh; */
  }

  #about{
    /* position:relative;
    top:100vh;
    left: -35vw; */
  }

  h1,h2,h3{
    font-family: 'Roboto', sans-serif;
  }

  h4,h5,p,a{
    font-family: 'Oswald', sans-serif;
  }
</style>
