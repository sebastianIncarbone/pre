<template>
    <div id="intro">
        <div class="incrementar">
            <h1 @click="sumar()"><i class="fas fa-chevron-right"></i></h1>
        </div>
        <div class="decrementar" >
            <h1 @click="restar()"><i class="fas fa-chevron-left"></i></h1>
        </div>
        <div class="card historia" v-show="this.contador <= 0">
            <h2>Historia</h2>
            <!-- - [Lau] -> Historia breve -->
            <vue-horizontal-timeline v-bind:items="steps" style="max-height:0vh"/>
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
                <div class=" elemContenedor">
                    <img src="../assets/neuralnetworkmap.png" width="200px" style="background:#FFF; border-radius:2rem;padding:4px;"/>
                </div>
                <div class="elemContenedor" style="margin-top:-15px; padding:10px;">
                    <p>
                        Son una red de nodos (neuronas) interconectados. Cada nodo es un punto de procesamiento de datos. Un nodo combina
                        el ingreso (<b>Input</b>) de los datos con un set de coeficientes, o pesos (<b>Weights</b>), que pueden amplificar
                        o moderar ese ingreso. Estos productos se suman (<b>Net Input function</b>), y se pasan a través de una función de 
                        activación (<b>Activation Function</b>), para determinar si y hasta que punto la señal debería progresar a 
                        través de la red para afectar el resultado de la tarea. 
                        Si la señal pasa (<b>Output</b>), se considera que la neurona fue "Activada".
                    </p>
                    <img src="../assets/nnnode.png" width="370px" style="background:#FFF; border-radius:2rem;padding:4px;"/>                    
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
                <iframe width="440" height="220" style="border-radius:2rem;" src="https://www.youtube.com/embed/9QErWiClGjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        </div>
        <div class="card fuentes" v-show="this.contador > 4">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
                <p>
                    <a href="https://en.wikipedia.org/wiki/Artificial_neural_network"><i class="fas fa-link"></i></a> https://en.wikipedia.org/wiki/Artificial_neural_network
                </p>
                <p>
                    <a href="https://skymind.ai/wiki/neural-network"><i class="fas fa-link"></i></a> https://skymind.ai/wiki/neural-network
                </p>
                <p>
                    <a href="https://www.forbes.com/sites/bernardmarr/2016/12/06/what-is-the-difference-between-artificial-intelligence-and-machine-learning"><i class="fas fa-link"></i></a> https://www.forbes.com/sites/bernardmarr/2016/12/06/what-is-the-difference-between-artificial-intelligence-and-machine-learning
                </p>
                <p>
                    <a href="https://www.grid.cl/blog/el-machine-learning-y-su-importancia-en-el-marketing-digital"><i class="fas fa-link"></i></a> https://www.grid.cl/blog/el-machine-learning-y-su-importancia-en-el-marketing-digital
                </p>
                <p> 
                    <a href="https://www.indracompany.com/es/blogneo/deep-learning-sirve"><i class="fas fa-link"></i></a> https://www.indracompany.com/es/blogneo/deep-learning-sirve
                </p>

            </div>
        </div>
    </div> 
</template>

<script>

const data = [
  { title: '1950', content: 'Alan Turing crea el “Test de Turing”' },
  { title: '1952', content: 'Arthur Samuel escribe el primer programa de ordenador capaz de aprender' },
  { title: '1958', content: 'Frank Rosenblatt diseña el Perceptrón, la primera red neuronal artificial' },
  { title: '1979', content: 'Estudiantes de la Universidad de Stanford inventan el “Stanford Cart”' },
  { title: '1981', content: 'Gerald Dejong introduce el concepto “Explanation Based Learning” ' },
  { title: '1985', content: 'Terry Sejnowski inventa NetTalk, que aprende a pronunciar palabras de la misma manera que lo haría un niño' },
  { title: '1997', content: 'El ordenador Deep Blue, de IBM vence al campeón mundial de ajedrez Gary Kaspárov' },
  { title: '2011', content: ' El ordenador Watson de IBM vence a sus competidores humanos en el concurso Jeopardy' },
  { title: '2012', content: 'Google desarrolla una Red Neuronal Profunda para detectar patrones en vídeos e imágenes' },
  { title: '2012', content: 'Nacimiento a la actual explosión de Machine Learning basado en RNPs (Redes Neuronales Profundas)' },
  { title: '2014', content: ' Facebook desarrolla DeepFace, algoritmo basado en RNPs capaz de reconocer a personas con la misma precisión que un ser humano' },
  { title: '2015', content: 'Amazon lanza su propia plataforma de Machine Learning' },
  { title: '2015', content: 'Microsoft crea “Distributed Machine Learning Toolkit”, que permite la distribución eficiente de problemas de machine learning en múltiples computadores.' }
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
        cursor: pointer;
        position:absolute;
        top: 82vh;
        left: 10vw;
    }

    #intro .incrementar{
        cursor: pointer;
        position:absolute;
        top: 82vh;
        right: 10vw;
    }

    #intro .card{
        border-radius: 2rem;
        position: absolute;
        top:20px;
        left:20px;
        height: 80vh;
        width: 90vw;
        padding: 4px;
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
        margin-top: -66px;
        max-width: 85vw;
        margin-left: auto;
        margin-right: auto;
    }

    .fuentes-body a{
        text-decoration: none;
    }
</style>
