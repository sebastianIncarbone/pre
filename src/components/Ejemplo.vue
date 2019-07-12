<template>
    <div id="demo">
        <div class="incrementar" >
            <h1 @click="sumar()"><i class="fas fa-chevron-right"></i></h1>
        </div>
        <div class="decrementar" >
            <h1 @click="restar()"><i class="fas fa-chevron-left"></i></h1>
        </div>
        <div class="card queUsamos" v-show="this.contador <= 0">
            <h2>¿Qué frameworks hay?</h2>
            <!-- - [Lau] -> tensor flow -->
        </div>
        <div class="card demo" v-show="this.contador == 1">
            <h2>La Demo</h2>
            <!-- - [Seba] -> muestra de la demo	 -->
            <p>
                Aqui podremos aplicar y ver en practica lo que ya vimos
            </p>
            <div class="chart">
                <canvas id="chard"></canvas>
            </div>
            <div class="valorPredicho">
                <input type="number" v-model="valorDeEntrada">
                <h2 v-text="predicho"></h2>
            </div>            
            <div class="formulario">
                <input type="number" v-model="valorX">
                <input type="number" v-model="valorY">
                <button @click="addValue()"></button>
                <input type="number" v-model="iteraciones">
            </div>
        </div>
        <div class="card fuentes" v-show="this.contador >= 2">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
                <p>
                    (<a href=""></a>).
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';

export default {
    name:'demo',
    data(){
        return{
            valorX:0,
            valorY:0,
            valoresX:[],
            valoresY:[],
            iteraciones:200,
            valorDeEntrada:0,
            predicho:0,
            contador:0
        }
    },
    methods:{
        addValor(){
            valoresX.push(valorX);
            valoresY.push(valorY);
        },
        sumar(){
            this.contador = this.contador >= 2? 2:this.contador + 1; 
        },
        restar(){
            this.contador = this.contador < 0? 0:this.contador - 1;
        },
        async entrenar(){
            const model = tf.sequential();

            model.add(tf.layers.dense({units: 1, inputShape: [1]}));
            model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

            const xs = tf.tensor2d(valoresX, [valoresX.lenght, 1]);
            const ys = tf.tensor2d(valoresY, [valoresY.lenght, 1]);

            await model.fit(xs, ys, {epochs:iteraciones});

            var predicho = model.predict(tf.tensor2d([valorDeEntrada],[1,1])).print();
        }
    }
}
</script>

<style>
    #demo{
        display: flexbox;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: hidden;
        padding: 3em;
    }
    #demo h2{
        text-align: center;
    }
    #demo .fuentes-body{
        margin-left: 2%;
        font-size: 16px;
    }
</style>