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
  @media only screen and (min-width: 900px) {
    #aplication{ 
      margin-top: 4em;
      max-width: 100vw;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10vh;
      grid-auto-rows: minmax(40vh,80vh);
      justify-items: center;
      align-items: flex-start;
    }
    
    #about{
        margin-top: 140vh;
    }
    
  }

  @media only screen and (max-width: 900px) {
    #aplication{ 
      max-width: 100vw;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10vh;
      grid-auto-rows: minmax(50vh,70vh);
      justify-items: center;
      align-items: center;
    }
    
    #about{
        margin-top: 70vh;
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
    z-index: 25;
  }

  h1,h2,h3{
    font-family: 'Roboto', sans-serif;
  }

  h4,h5,p,a{
    font-family: sans-serif;
  }
  
    
    .decrementar{
        cursor: pointer;
        position:absolute;
        top: 82vh;
        left: 10vw;
    }

    .incrementar{
        cursor: pointer;
        position:absolute;
        top: 82vh;
        right: 10vw;
    }

    .card{
        border-radius: 2rem;
        position: absolute;
        top:20px;
        left:20px;
        height: 80vh;
        width: 90vw;
        padding: 4px;
        background: rgba(54, 53, 55, 0.5);
    }

</style>
