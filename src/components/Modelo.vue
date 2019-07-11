<template>
    <div id="model">
        <div class="incrementar" >
            <h1 v-text="'>'" @click="sumar()"></h1>
        </div>
        <div class="decrementar" >
            <h1 v-text="'<'" @click="restar()"></h1>
        </div>
        <div class="card queEs" v-show="this.contador <= 0">
            <h2>¿Qué es un modelo?</h2>
            <!-- - [Seba-Lau] -> Que es un modelo? -->
        </div>
        <div class="card datos" v-show="this.contador == 1">
            <h2>¿Qué datos los integran?</h2>
            <!-- - [Seba-Lau] -> Que datos ingresan en un modelo? -->
        </div>
        <div class="card parametros" v-show="this.contador == 2">
            <h2>Los parámetros de un modelo</h2>
            <!-- - [Seba-Lau] -> Los parametros del modelo -->
        </div>
        <div class="card error" v-show="this.contador == 3">
            <h2>El error, ¿Es importante?</h2>
            <!-- - [Seba-Lau] -> El error -->
        </div>
        <div class="card metodoDeCuadrados" v-show="this.contador == 4">
            <h2>Método de cuadrados ordinarios, ¿Qué es?</h2>
            <!-- - [Seba-Nahu] -> Metodo de cuadrados ordinarios -->
        </div>
        <div class="card regresionLineal" v-show="this.contador == 5">
            <h2>¿Qué es la Regresión Lineal?</h2>
            <!-- - [Seba-Nahu] -> Que es regresion lineal? -->
        </div>
        <div class="card regrecionLinealSimple" v-show="this.contador == 6">
            <h3>Regresión Lineal Simple</h3>
            <!-- - [Seba-Nahu] -> Regrecion Lineal Simple -->
        </div>
        <div class="card regrecionLinealMultiple" v-show="this.contador == 7">
            <h3>Regresión Lineal Múltiple</h3>
            <!-- - [Seba-Nahu] -> Regrecion Lineal Multiple -->
        </div>
        <div class="card comparativaConTensorFlow" v-show="this.contador == 8">
            <h2>¿Cómo se aplica en TensorFlow?</h2>
            <!-- - [Lau] -> Comparar con tensor flow -->
        </div>
        <div class="card fuentes" v-show="this.contador >= 9">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
                <p>
                    (<a href="https://medium.com/datos-y-ciencia/machine-learning-supervisado-fundamentos-de-la-regresi%C3%B3n-lineal-bbcb07fe7fd">2</a>). https://medium.com/datos-y-ciencia/machine-learning-supervisado-fundamentos-de-la-regresi%C3%B3n-lineal-bbcb07fe7fd
                </p>
            </div>
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
            this.contador = this.contador >= 9? 9:this.contador + 1; 
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
    #model h2, #model h3{
        margin-left: 1.5%;
        background-color: rgba(0, 0, 0, 0.678);
        color: bisque;
        text-align: center;
    }
    #model .fuentes-body{
        margin-left: 2%;
        font-size: 16px;
    }
</style>
