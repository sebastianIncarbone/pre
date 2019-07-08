<template>
    <div id="intro">
        <div class="incrementar" >
            <h1 v-text="'>'" @click="sumar()"></h1>
        </div>
        <div class="decrementar" >
            <h1 v-text="'<'" @click="restar()"></h1>
        </div>
        <div class="card historia" v-show="this.contador <= 0">
            <h2>Historia</h2>
            <!-- - [Lau] -> Historia breve -->
        </div>
        <div class="card redesNeuronales" v-show="this.contador == 1">
            <h2>Redes neuronales</h2>
            <!-- - [Seba] -> Redes neuronales concepto -->
        </div>
        <div class="card queEs" v-show="this.contador == 2">
            <h2>Que es machine learning?</h2>
            <!-- - [Ami] -> Que es machine learning? -->
        </div>
        <div class="card integracionConIa" v-show="this.contador == 3">
            <h2>como se relaciona esto con IA?</h2>
            <!-- - [Nahu] -> Como se relaciona con la Inteligencia Artificial -->
        </div>
        <div class="card deepLearning" v-show="this.contador > 3">
            <h2>Y deep learning? Que es?</h2>
            <!-- - [Lau] -> Diferencias con Deep Learning -->
        </div>
    </div> 
</template>

<script>
export default {
    name:'introduccion',
    data(){
        return{
            contador:0
        }
    },
    methods:{
        sumar(){
            this.contador = this.contador >= 4? 4:this.contador + 1; 
        },
        restar(){
            this.contador = this.contador < 0? 0:this.contador - 1;
        }
    }
}
</script>

<style>
    #intro{
        display: flexbox;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: hidden;
        padding: 3em;
    }
    #intro .decrementar{
        position: absolute;
        top:50vh;
        left:20px;
        cursor: pointer;
    }
    #intro .incrementar{
        position: absolute;
        top:50vh;
        right:50px;
        cursor: pointer;
    }
    #intro .card{
        position: absolute;
        height: 80vh;
        width: 90vw;
        background: rgba(54, 53, 55, 0.5);
    }
</style>
