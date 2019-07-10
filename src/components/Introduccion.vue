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
            <!-- - [Nahu] -> Redes neuronales concepto -->
            <p class="elemContenedor">
                También conocidas como Redes Neuronales Artificiales (ANN, por sus siglas en inglés), es un modelo implícito
                de la neurona biológica (elaborado) para tomar decisiones y (llegar) a conclusiones simulando el 
                funcionamiento del cerebro humano (Bryant y Frigaard, 2006).
            </p>
            <div class="contenedorConGrafico">
                <div class="grafico elemContenedor">
                    <img src="../assets/neuralnetworkmap.png" height="350px" width="300px"/>
                </div>
                <div class="elemContenedor">
                    <p>
                        Las redes neurales se estructuran en 
                    </p>
                    <img src="../assets/nnnode.png" height="200px" width="400px"/>                    
                </div>
            </div>
            
        </div>
        <div class="card queEs" v-show="this.contador == 2">
            <h2>¿Que es Machine Learning?</h2>
            <!-- - [Ami] -> Que es machine learning? -->
        </div>
        <div class="card integracionConIa" v-show="this.contador == 3">
            <h2>¿Cómo se relaciona esto con IA?</h2>
            <!-- - [Nahu] -> Como se relaciona con la Inteligencia Artificial -->
        </div>
        <div class="card deepLearning" v-show="this.contador == 4">
            <h2>¿Y deep learning? ¿Qué es?</h2>
            <!-- - [Ami] -> Diferencias con Deep Learning -->
        </div>
        <div class="card fuentes" v-show="this.contador > 4">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
            <p>
                (<a href="https://en.wikipedia.org/wiki/Artificial_neural_network">2</a>). https://en.wikipedia.org/wiki/Artificial_neural_network
                (<a href="https://skymind.ai/wiki/neural-network">3</a>). https://skymind.ai/wiki/neural-network
            </p>
            </div>
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
            this.contador = this.contador >= 5? 5:this.contador + 1; 
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
    #intro h2{
        margin-left: 2%;
    }
    #intro .fuentes-body{
        margin-left: 2%;
        font-size: 16px;
    }
    #intro .contenedorConGrafico{
        position:relative;
        display:flex;
        flex-direction:row;
        align-content: center;
        justify-content: space-between;
    }
    #intro .elemContenedor{
        margin-right: 0.5%;
        margin-left: 0.5%;
        text-align: justify;
    }
    .contenedorConGrafico .grafico{
        padding: 0.5%;
        background-color: rgba(211, 211, 211, 0.692);
        border-width: 2px;
        border-color: black;
        border-radius: 10px;
    }
</style>
