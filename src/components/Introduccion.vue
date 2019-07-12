<template>
    <div id="intro">
        <div class="incrementar" >
            <h1 @click="sumar()"><i class="fas fa-chevron-right"></i></h1>
        </div>
        <div class="decrementar" >
            <h1 @click="restar()"><i class="fas fa-chevron-left"></i></h1>
        </div>
        <div class="card historia" v-show="this.contador <= 0">
            <h2>Historia</h2>
            <!-- - [Lau] -> Historia breve -->
            <div class="swiper-container" style="max-width:90%">
                <p class="swiper-control">
                <button type="button" class="btn btn-default btn-sm prev-slide">Prev</button>
                <button type="button" class="btn btn-default btn-sm next-slide">Next</button>
                </p>
                <div class="swiper-wrapper timeline">
                    <div class="swiper-slide" v-for="item in steps" v-bind:key="item">
                        <div class="timestamp">
                            <span class="date">{{item.dateLabel}}</span>
                        </div>
                        <div class="status">
                            <span>{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
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
            <h2>¿Qué es Machine Learning?</h2>
            <!-- - [Ama] -> ¿Qué es Machine Learning? -->
            <p class = "elemContenedor">
                Nació del reconocimiento de patrones y de la teoría que dice que las computadoras pueden aprender sin ser
                programadas para realizar tareas específicas; investigadores interesados en la inteligencia artificial 
                deseaban saber si las computadoras podían aprender de datos. 
                 </br>El aspecto iterativo del machine learning es importante porque a medida que los modelos son expuestos a nuevos
                datos, éstos pueden adaptarse de forma independiente. Aprenden de cálculos previos para producir decisiones y 
                resultados confiables y repetibles.
                 </br>En este contexto, “learning” (aprender), no se trata de memorizar y recolectar datos. Se trata de crear un modelo a 
                partir de la información suministrada para poder generar conclusiones sobre ejemplares nunca antes vistos.
                </br>El propósito del machine learning es que las personas y las máquinas trabajen de la mano, al éstas ser capaces de aprender 
                como un humano lo haría. Precisamente esto es lo que hacen los algoritmos, permiten que las máquinas ejecuten tareas, tanto
                generales como específicas.
            </p>
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
            <!-- - [Ama -> Diferencias con Deep Learning -->
            <p class="deepLearning">
                El Deep Learning lleva a cabo el proceso de Machine Learning usando una red neuronal artificial que se compone
                de un número de niveles jerárquicos. 
                </br> En el nivel inicial de la jerarquía  la red aprende algo simple y luego envía esta información al siguiente nivel. 
                </br> El siguiente nivel toma esta información sencilla, la combina, compone una información algo un poco más compleja, 
                y se lo pasa al tercer nivel, y así sucesivamente.
            </p>
           
            <h2> Proponemos un ejemplo: </h2>
            <p class="deepLearning">
                Si pensamos en un contexto de su uso podríamos imaginar un sistema que reconoce imágenes de gatos, el nivel inicial de una red 
                de Deep Learning podría utilizar las diferencias entre las zonas claras y oscuras de una imagen para saber dónde están 
                los bordes de la imagen. 
                </br> El nivel inicial pasa esta información al segundo nivel, que combina los bordes construyendo formas simples, como una
                línea diagonal o un ángulo recto. 
                </br> El tercer nivel combina las formas simples y obtiene objetos más complejos como óvalos o rectángulos.
                </br> El siguiente nivel podría combinar los óvalos y rectángulos, formando barbas, patas o colas rudimentarias.
                </br> El proceso continúa hasta que se alcanza el nivel superior en la jerarquía, en el cual la red aprende a identificar gatos.
            </p>
            <p class="deepLearning" >
                <img src="../assets/gatitos.jpg" height="90px" width="180px"/> 
            </p> 
        </div>
        <div class="card fuentes" v-show="this.contador > 4">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
                <p>
                    (<a href="https://en.wikipedia.org/wiki/Artificial_neural_network">1</a>). https://en.wikipedia.org/wiki/Artificial_neural_network
                </p>
                <p>
                    (<a href="https://skymind.ai/wiki/neural-network">2</a>). https://skymind.ai/wiki/neural-network
                </p>
                <p>
                    (<a href="https://www.forbes.com/sites/bernardmarr/2016/12/06/what-is-the-difference-between-artificial-intelligence-and-machine-learning">3</a>). https://www.forbes.com/sites/bernardmarr/2016/12/06/what-is-the-difference-between-artificial-intelligence-and-machine-learning
                </p>
                <p>
                    (<a href="https://www.grid.cl/blog/el-machine-learning-y-su-importancia-en-el-marketing-digital">4</a>). https://www.grid.cl/blog/el-machine-learning-y-su-importancia-en-el-marketing-digital
                </p>
                <p> 
                    (<a href="https://www.indracompany.com/es/blogneo/deep-learning-sirve">5</a>).https://www.indracompany.com/es/blogneo/deep-learning-sirve
                </p>

            </div>
        </div>
    </div> 
</template>

<script>

const data = [
  { dateLabel: 'January 2017', title: 'Gathering Information' },
  { dateLabel: 'February 2017', title: 'Planning' },
  { dateLabel: 'March 2017', title: 'Design' },
  { dateLabel: 'April 2017', title: 'Content Writing and Assembly' },
  { dateLabel: 'May 2017', title: 'Coding' },
  { dateLabel: 'June 2017', title: 'Testing, Review & Launch' },
  { dateLabel: 'July 2017', title: 'Maintenance' }
];

export default {
    name:'introduccion',
    data(){
        return{
            contador:0,
            steps: data,
        }
    },
    methods:{
        sumar(){
            this.contador = this.contador >= 5? 5:this.contador + 1; 
        },
        restar(){
            this.contador = this.contador < 0? 0:this.contador - 1;
        }
    },
    mounted() {
        var swiper = new Swiper('.swiper-container', {
        //pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        grabCursor: true,
        paginationClickable: true,
        nextButton: '.next-slide',
        prevButton: '.prev-slide',
        });    
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
        border-radius: 2rem;
        position: absolute;
        height: 80vh;
        width: 90vw;
        background: rgba(54, 53, 55, 0.5);
    }

    #intro h2{
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

    .timeline {
        margin: 50px 0;
        list-style-type: none;
        display: flex;
        padding: 0;
        text-align: center;
        }
        .timeline li {
        transition: all 200ms ease-in;
        }
        .timestamp {
        width: 200px;
        margin-bottom: 20px;
        padding: 0px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 100; 
        }
        .status {
        padding: 0px 40px;
        display: flex;
        justify-content: center;
        border-top: 4px solid #3e70ff;
        position: relative;
        transition: all 200ms ease-in ;
        }
        
        .status span {
        font-weight: 600;
        padding-top: 20px;
        }
        .status span:before {
        content: '';
        width: 25px;
        height: 25px;
        background-color: #e8eeff;
        border-radius: 25px;
        border: 4px solid #3e70ff;
        position: absolute;
        top: -15px;
        left: 42%;
        transition: all 200ms ease-in;
        }
        .swiper-control {
        text-align: right;
        }

        .swiper-container {
        width: 100%;
        height: 250px;
        margin: 50px 0;
        overflow: hidden;
        padding: 0 20px 30px 20px;
        }
        .swiper-slide {
        width: 200px;
        text-align: center;
        font-size: 18px;
        }
        .swiper-slide:nth-child(2n) {
        width: 40%;
        }
        .swiper-slide:nth-child(3n) {
        width: 20%;
        }
</style>
