<template>
    <div class="ejemplo">
        <div class="queUsamos">
            <h2>Que frameworks hay?</h2>
            <!-- - [Lau] -> tensor flow -->
        </div>
        <div class="demo">
            <h2>La demo</h2>
            <!-- - [Seba] -> muestra de la demo	 -->
            <p>
                Aqui podremos aplicar y ver en practica lo que ya vimos
            </p>
            <div class="chart">

            </div>
            <!-- <div class="valorPredicho">
                <input type="number" v-bind="valorDeEntrada">
                <h2 v-text="predicho"></h2>
            </div>            
            <div class="formulario">
                <input type="number" v-bind="valorX">
                <input type="number" v-bind="valorY">
                <button @click="addValue()"></button>
                <input type="number" v-bind="iteracciones">
            </div> -->
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
            iteracciones:200,
            valorDeEntrada:0,
            predicho:0,
        }
    },
    methods:{
        addValor(){
            valoresX.push(valorX);
            valoresY.push(valorY);
        },
        async entrenar(){
            const model = tf.sequential();

            model.add(tf.layers.dense({units: 1, inputShape: [1]}));
            model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

            const xs = tf.tensor2d(valoresX, [valoresX.lenght, 1]);
            const ys = tf.tensor2d(valoresY, [valoresY.lenght, 1]);

            await model.fit(xs, ys, {epochs:iteracciones});

            var predicho = model.predict(tf.tensor2d([valorDeEntrada],[1,1])).print();
        }
    }
}
</script>

<style>

</style>
