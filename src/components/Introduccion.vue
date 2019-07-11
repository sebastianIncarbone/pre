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
                        Son una red de nodos (neuronas) interconectados. Cada nodo es un punto de procesamiento de datos. Un nodo combina
                        el ingreso (<b>Input</b>) de los datos con un set de coeficientes, o pesos (<b>Weights</b>), que pueden amplificar
                        o moderar ese ingreso. Estos productos se suman (<b>Net Input function</b>), y se pasan a través de una función de 
                        activación (<b>Activation Function</b>), para determinar si y hasta que punto la señal debería progresar a 
                        través de la red para afectar el resultado de la tarea. 
                        Si la señal pasa (<b>Output</b>), se considera que la neurona fue "Activada".
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
            <p class="elemContenedor">
                Si definimos IA (Inteligencia Artificial) como el concepto de una máquina capaz de hacer tareas de una manera
                percibida como "inteligente", entonces Machine Learning es la aplicación del concepto de IA sobre máquinas
                capaces de aprender a llevar a cabo esas tareas.
            </p>
            <p class="elemContenedor">
                <iframe width="440" height="220" src="https://www.youtube.com/embed/9QErWiClGjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
            <p class="elemContenedor">
                Esta influencia se ve atada desde los comienzos del Machine Learning y está engranada al concepto mismo del
                aprendizaje computarizado, nacida desde el deseo de "enseñar" a las máquinas a llevar a cabo tareas tal como
                se le enseña a una persona, y ,con el auge de Internet, esta posibilidad se ve aumentada gracias a la enorme
                cantidad de datos y contenido circulando en la red.
            </p>
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
                </p>
                <p>
                    (<a href="https://skymind.ai/wiki/neural-network">3</a>). https://skymind.ai/wiki/neural-network
                </p>
                <p>
                    (<a href="https://www.forbes.com/sites/bernardmarr/2016/12/06/what-is-the-difference-between-artificial-intelligence-and-machine-learning">4</a>). https://www.forbes.com/sites/bernardmarr/2016/12/06/what-is-the-difference-between-artificial-intelligence-and-machine-learning
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
        margin-left: 1.5%;
        background-color: rgba(0, 0, 0, 0.678);
        color: bisque;
        text-align: center;
    }
    #intro .fuentes-body{
        margin-left: 2%;
        font-size: 16px;
    }
    #intro .contenedorConGrafico{
        display:flex;
        flex-direction:row;
        justify-content: center;
    }
    #intro .elemContenedor{
        display:flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;
        margin-right: 0.5%;
        margin-left: 0.5%;
        text-align: justify;
    }
    .contenedorConGrafico .grafico{
        background-color: rgb(255, 255, 255);
        border-width: 2px;
        border-color: black;
        border-radius: 2px;
    }
</style>
