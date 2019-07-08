<template>
    <div id="model">
        <div class="incrementar" >
            <h1 v-text="'>'" @click="sumar()"></h1>
        </div>
        <div class="decrementar" >
            <h1 v-text="'<'" @click="restar()"></h1>
        </div>
        <div class="card queEs" v-show="this.contador <= 0">
            <h2>Que es un modelo?</h2>
            <!-- - [Lau] -> Que es un modelo? -->
        </div>
        <div class="card datos" v-show="this.contador == 1">
            <h2>Que datos los integran?</h2>
            <!-- - [Seba] -> Que datos ingresan en un modelo? -->
        </div>
        <div class="card parametros" v-show="this.contador == 2">
            <h2>Parametros de un modelo</h2>
            <!-- - [Ami] -> Los parametros del modelo -->
        </div>
        <div class="card error" v-show="this.contador == 3">
            <h2>El error? es importante?</h2>
            <!-- - [Nahu] -> El error -->
        </div>
        <div class="card metodoDeCuadrados" v-show="this.contador == 4">
            <h2>Metodo de cuadrados ordinarios... Como se come esto?</h2>
            <!-- - [Seba] -> Metodo de cuadrados ordinarios -->
        </div>
        <div class="card regrecionLineal" v-show="this.contador == 5">
            <h2>Que es regrecion lineal</h2>
            <!-- - [Lau] -> Que es regresion lineal? -->
        </div>
        <div class="card regrecionLinealSimple" v-show="this.contador == 6">
            <h3>simple</h3>
            <!-- - [Nahu] -> Regrecion Lineal Simple -->
        </div>
        <div class="card regrecionLinealMultiple" v-show="this.contador == 7">
            <h3>multiple</h3>
            <!-- - [Lau] -> Regrecion Lineal Multiple -->
        </div>
        <div class="card comparativaConTensorFlow" v-show="this.contador >= 8">
            <h2>Que tiene que ver esto con tesorFlow?</h2>
            <!-- - [Seba] -> Comparar con tensor flow -->
        </div>
    </div>
</template>

<script>
export default {
    name:'modelo',
    data(){
        return{
            contador:0
        }
    },
    methods:{
        sumar(){
            this.contador = this.contador >= 8? 8:this.contador + 1; 
        },
        restar(){
            this.contador = this.contador < 0? 0:this.contador - 1;
        }
    }
}
</script>

<style>
    #model{
        display: flexbox;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: hidden;
        padding: 3em;
    }
    #model .decrementar{
        position: absolute;
        top:50vh;
        left:20px;
        cursor: pointer;
    }
    #model .incrementar{
        position: absolute;
        top:50vh;
        right:50px;
        cursor: pointer;
    }
    #model .card{
        position: absolute;
        height: 80vh;
        width: 90vw;
        background: rgba(54, 53, 55, 0.5);
    }
</style>
