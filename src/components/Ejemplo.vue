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
            <!-- - [Lau] ->  -->
<div>
 <img src="../assets/logo_tensorFLOWWW.png" heigth="200px" width="250px"> <br>
</div>
<div>
<img src="../assets/logo_spark.png" heigth="200px" width="250px"><br>
</div><div>
<img src="../assets/logo_caffe.png" heigth="200px" width="250px" style="background:#FFF"><br>
</div>
<div>
    <img src="../assets/logo_torch.jpg" heigth="200px" width="250px" style="background:#FFF"><br>
</div>
<div>
    <img src="../assets/logo_ski.png" heigth="200px" width="250px" style="background:#FFF"><br>
</div>




        </div>
        <div class="card demo" v-show="this.contador == 1">
            <div class="chart">
                <canvas id="chart"></canvas>
            </div>
            <div class="valorPredicho">
                <h2 v-text="predicho"></h2>
            </div>            
            <div class="formulario">
                <!-- <input type="number" v-model="valorX"> -->
                <input type="number" v-model="valorDeEntrada">
                <input type="number" v-model="iteraciones">
                <button @click="entrenar()">Entrenar</button>
                <input type="number" v-model="valorY">
                <button @click="addValor(valorX,valorY)">+</button>
                <button @click="clear()">Clear</button>
                
            </div>
        </div>
        <div class="card fuentes" v-show="this.contador >= 2">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
                <p>
                    <a href="https://www.tensorflow.org"><i class="fas fa-link"></i></a> Tensor flow.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';
import Chart from 'chart.js';

export default {
    name:'demo',
    data(){
        return{
            datosAGraficar: 
                {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [
                        { // one line graph
                            label: 'Regresion linear',
                            data: [],
                            backgroundColor: [
                                'rgba(54,73,93,.6)'
                            ],
                            borderColor: [
                                '#36495d',
                            ],
                            borderWidth: 3
                        },
                        { // another line graph
                            label: 'Valores',
                            data: [],
                            backgroundColor: [
                            'rgba(71, 183,132,.4)',
                            ],
                            borderColor: [
                            '#47b784',
                            ],
                            borderWidth: 3
                        }
                        ]
                    },
                    options: {
                        responsive: true,
                        lineTension: 1,
                        scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true,
                            padding: 25,
                            }
                        }]
                        }
                    }
                },
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
        addValor(x,y){
            this.valorX++;
            const X = parseInt(x);
            const Y = parseInt(y);
            this.datosAGraficar.data.labels.push(X);

            
            this.datosAGraficar.data.datasets[1].data.push({x: X ,y: Y});
            this.valoresX.push(X);
            this.valoresY.push(Y);      
            this.dibujar('chart', this.datosAGraficar);

        },
        addTensor(x, y){
            
            this.datosAGraficar.data.datasets[0].data.push({x: x ,y: parseFloat(y)});
            
            this.dibujar('chart', this.datosAGraficar);
            
        },
        sumar(){
            this.contador = this.contador >= 2? 2:this.contador + 1; 
        },
        restar(){
            this.contador = this.contador < 0? 0:this.contador - 1;
        },
        dibujar(chartId, chartData){
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
        clear(){
            this.datosAGraficar = 
                {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [
                        { // one line graph
                            label: 'Regresion linear',
                            data: [],
                            backgroundColor: [
                                'rgba(54,73,93,.6)'
                            ],
                            borderColor: [
                                '#36495d',
                            ],
                            borderWidth: 3
                        },
                        { // another line graph
                            label: 'Valores',
                            data: [],
                            backgroundColor: [
                            'rgba(71, 183,132,.4)',
                            ],
                            borderColor: [
                            '#47b784',
                            ],
                            borderWidth: 3
                        }
                        ]
                    },
                    options: {
                        responsive: true,
                        lineTension: 1,
                        scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true,
                            padding: 25,
                            }
                        }]
                        }
                    }
                };
            this.valorX=0;
            this.valorY=0;
            this.valoresX=[];
            this.valoresY=[];
            this.iteraciones=200;
            this.valorDeEntrada=0;
            this.predicho=0;
            this.dibujar('chart', this.datosAGraficar);
        },
        async entrenar(){
            this.datosAGraficar.data.datasets[0].data = [];
            const model = tf.sequential();

            model.add(tf.layers.dense({units: 1, inputShape: [1]}));
            model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

            const lenX = parseInt(this.valoresX.length);
            const lenY = parseInt(this.valoresY.length);

            const xs = tf.tensor2d(this.valoresX, [lenX, 1]);
            const ys = tf.tensor2d(this.valoresY, [lenY, 1]);

            await model.fit(xs, ys, {epochs:this.iteraciones});

            for (const key in this.valoresX) {
                let predicho = model.predict(tf.tensor2d([parseInt(key)],[1,1])).dataSync()[0].toFixed(4);
                this.addTensor(parseInt(key), predicho);
            }
            this.predicho = model.predict(tf.tensor2d([parseInt(this.valorDeEntrada)],[1,1])).dataSync()[0].toFixed(4);
            this.addTensor(parseInt(this.valorDeEntrada), this.predicho);
        }
    },
    mounted() {
        this.dibujar('chart', this.datosAGraficar);
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
    #demo .demo{
        background: rgba(25, 35, 45, .9)
    }
    #demo .queUsamos{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1em;
        
    }
</style>