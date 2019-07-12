<template>
    <div id="model">
        <div class="incrementar" >
            <h1 @click="sumar()"><i class="fas fa-chevron-right"></i></h1>
        </div>
        <div class="decrementar" >
            <h1 @click="restar()"><i class="fas fa-chevron-left"></i></h1>
        </div>
        <div class="card queEs" v-show="this.contador <= 0">
            <h2>¿Qué es un modelo?</h2>
            <!-- - [Seba-Lau] -> Que es un modelo? -->
         <p>   Tras entrenar al sistema (es decir, tras detectar los patrones en los datos), se crea un modelo que servirá para hacer las predicciones. Podemos asimilar un modelo a un filtro en el que entran datos nuevos y cuya salida es la clasificación de ese dato según los patrones que se han detectado en el entrenamiento. Por ejemplo, si se entrena un modelo con datos históricos de clientes para detectar el riesgo de baja de una tarjeta de crédito, el modelo clasificará a los nuevos clientes en función de su comportamiento para predecir el riesgo de baja.</p>

<div style="margin-left:200px;">
 <img src="../assets/modelo.png" heigth="200px" width="250px"> 
</div>

<p>
Un modelo busca el equilibrio entre aproximarse en representar correctamente la realidad
    y ser simple para poder utilizarlo. Imaginemos a un ave, Pepita... podemos aproximarnos en un
    primer modelo, a que un ave puede volar. pero.. ¿Qué pasa? es un poco básico por que no todas las 
    aves puedenn volar. Por lo tanto actualizamos el modelo y decimos que si un ave es adulta y esta 
    herida no puede volar. Pero de repente nos vamos un poco mas al sur... y que aparece un pinguino 
    que es ave... si! pero carece de la posibilidad alguna de despegarse del suelo 
    Entonces ajustamos nuevamente nuestro modelo a las variaciones de la realidad que estamos modelando 
    pero al final acabaremso teniendo un modelo muy complejo con todas las ecepciones  de porque un ave
    vuela o no. Una alternativa a esto es hacer uso de la probabilidad, para decir 
    matematicamente que la mayoria de aves pueden volar.
</p>
        </div>
        <div class="card datos" v-show="this.contador == 1">
            <h2>¿Qué datos los integran?</h2>
            <!-- - [Seba-Lau] -> Que datos ingresan en un modelo? -->
            <p>Es la materia prima del sistema de predicción. Es el histórico de datos que se usa para entrenar al sistema que detecta los patrones. El conjunto de datos se compone de instancias, y las instancias de factores, características o propiedades.
No es raro ver cómo se usan indiferentemente los conceptos minería de datos y machine learning. Son conceptos primos hermanos. Desde nuestro punto de vista, la principal diferencia radica en el objetivo que tiene cada una de las disciplinas. Mientras que la minería de datos descubre patrones anteriormente desconocidos, el machine learning se usa para reproducir patrones conocidos y hacer predicciones basadas en los patrones.
En pocas palabras se podría decir que la minería de datos tiene una función exploratoria mientras que el machine learning se focaliza la predicción.</p>


<div  style="margin-left:200px;">
 <img src="../assets/datos.jpg"> 
</div>

        </div>
        <div class="card parametros" v-show="this.contador == 2">
            <h2>Los parámetros de un modelo</h2>
            <!-- - [Seba-Lau] -> Los parametros del modelo -->
                <p>Son los datos que podemos modificar, estos valores son los parametros del modelo y son los unicos que nos 
    aportan la flexibilidad para poder ajustarnos a los datos. </p>

    
<div style="margin-left:100px;">
 <img src="../assets/parametros.png" heigth="500px" width="550px"> 
</div>
        </div>

    
        <div class="card error" v-show="this.contador == 3">
            <h2>El error, ¿Es importante?</h2>
            <!-- - [Seba-Lau] -> El error -->
                <p>Es necesario siempre definir una funcion de error que permita definir como el modelo se ajusta o no a los datos.
    Normalmente cuando se usa algoritmos de aprendijase supervisado esta funcion se computa a partir de los datos de 
    salida suministrados.
    En caso de un algoritmo de aprendisaje no supervisado, otras medidas se computan a base de los datos de entrada.
    Esta señal de error es muy importante por que es a partir de la cual se ajustara el modelo. En un proceso que es
    denominado obtimizacion normalmente conocida como <strong>Entrenamiento</strong>.</p>


<div style="margin-left:150px;">
 <img src="../assets/error.png" heigth="350px" width="370px"> 
</div>


        </div>
        <div class="card regresionLineal" v-show="this.contador == 4">
            <h2>¿Qué es la Regresión Lineal?</h2>
            <!-- - [Seba-Nahu] -> Que es regresion lineal? -->
            <p>
                La regresión lineal es un algoritmo de aprendizaje supervisado que se utiliza en Machine Learning y en estadística. Su propósito es establecer un modelo para la relación entre un cierto número de características y una variable objetivo continua.
            </p>
            <div class="contenedorConGrafico">
                <div class="elemContenedor">
                    <img src="../assets/linearregresiongraph.png" height="300px" width="500px"/> 
                </div>
                <div class="elemContenedor">
                    <p>
                        El objetivo de estos algoritmos es poder encontrar una recta o función con la tendencia de predicción. Para hacerlo se mide el error con respecto a los puntos de entrada y el valor «Y» de salida real. El algoritmo deberá minimizar el coste de una función de error cuadrático y esos coeficientes corresponderán con la recta óptima. Hay diversos métodos para conseguir minimizar el coste. Lo más común es utilizar una versión vectorial y la llamada Ecuación Normal o el Método de Cuadrados Ordinarios que nos dará un resultado directo.
                    </p>
                </div>
            </div>
            <p>
                Aquí un ejemplo donde vemos datos recabados sobre los precios de las pizzas en Dinamarca (los puntos en rojo) y la linea negra es la tendencia. Esa es la línea de regresión que buscamos que el algoritmo aprenda y calcule sólo.
            </p>
        </div>
        <div class="card regresionLinealSimple" v-show="this.contador == 5">
            <h3>Regresión Lineal Simple</h3>
            <!-- - [Seba-Nahu] -> Regresion Lineal Simple -->
            <p>- Desplazamiento de Recta</p>
            <p>- Aproximación Absoluta</p>
            <p>
                Si partimos de un punto y una recta, el objetivo es conseguir que la recta se acerque al punto. Para ello, el algoritmo utilizará un parámetro llamado “tasa de aprendizaje”. Esta tasa de aprendizaje es el número por el que se multiplicarán los parámetros de la recta para realizar pequeñas aproximaciones de la recta al punto.
                 En otras palabras, la tasa de aprendizaje determinará la longitud de la distancia cubierta en cada interacción que hará que la recta se acerque al punto. Normalmente se representa por α.
            </p>
            <p>
                <img src="../assets/aproxabsoluta.png" height="50px" width="200px"/>                 
            </p>
            <p>- Aproximación Cuadrática</p>
            <p>
                Se basa en la siguiente premisa: Si hay un punto cercano a la recta y la distancia es pequeña, la recta se desplazará una distancia corta. Si está lejos, la recta se desplazará mucho más.
            </p>
            <p>
                <img src="../assets/aproxcuad.png" height="50px" width="300px"/>                 
            </p>
        </div>
        <div class="card descensoDelGradiente" v-show="this.contador == 6">
            <h3>Descenso del Gradiente</h3>
            <!-- - [Seba-Nahu] -> >Descenso del Gradiente -->
            <p>
                Para minimizar el error, se utilizará el método de descenso en gradiente, el cual calcula las diferentes direcciones en las que la recta se puede desplazar para reducir el error, y actúa de forma que reduce el error al mínimo. De esta forma, el descenso en gradiente actuará en la dirección del gradiente negativo.
            </p>
            <p class="contenedorConGrafico">
                <img src="../assets/descgrad.png" height="200px" width="350px"/>
                <img src="../assets/learnrate.png" height="200px" width="350px"/>
            </p>
            <p>
                Cuando este algoritmo se ha ejecutado un número suficiente de veces finalmente arrojará un mínimo local o global. Para ello, la tasa de aprendizaje ha de tener un valor adecuado. Si la tasa de aprendizaje es demasiado alta el algoritmo nunca encontrará un mínimo, dado que los saltos serán muy grandes. Si la tasa de aprendizaje es demasiado baja, llevará un tiempo infinito alcanzar el mínimo.
            </p>
            <p>
                Métodos de descenso de gradiente: Estocástico, Batch y Mini Batch
            </p>
        </div>
        <div class="card regresionLinealMultiple" v-show="this.contador == 7">
            <h3>Regresión Lineal Múltiple</h3>
            <!-- - [Seba-Nahu] -> Regresion Lineal Multiple -->
            <p>
                Las variables independientes también se conocen como predictoras, que son las variables utilizadas para realizar predicciones sobre otras variables, a las que llamamos variables dependientes.
            </p>
            <p>
                Cuando la salida que perseguimos predecir depende de más de una variable, se puede utilizar un modelo más complejo que tenga en cuenta las dimensiones adicionales. Considerando si son relevantes o no para abordar el problema planteado, el uso de más variables puede contribuir a conseguir mejores predicciones.
            </p>
            <p class="contenedorConGrafico">
                <img src="../assets/hyperplane.png" height="220px" width="290px"/>                
            </p>
            <p>
                Según añadimos más predictores, añadimos más dimensiones al problema y se hace más complicado visualizarlo, pero el concepto del proceso no varía.
            </p>
        </div>
        <div class="card comparativaConTensorFlow" v-show="this.contador == 8">
            <h2>¿Cómo se aplica en TensorFlow?</h2>
            <!-- - [Lau] -> Comparar con tensor flow -->
            <p>Modelo en TensorFlow: Los Estimators representan un modelo completo y ofrecen los mecanismos para entrenar los modelos,
evaluar su error y generar predicciónes. Son la capa de más alto nivel.
Te abstraen del entorno donde se ejecutarán ya sea local, un clúster distribuido con CPUs, GPUs o TPUs.</p>

<p>
Datos en TensorFlow: 
Existen los datasets que son herramientas para construir y cargar un input de datos, manipularlo e introducirlo en tu modelo.</p>



<p>
Regresion lineal en TensorFlow:
Supongamos que agarramos una funcion lineal y = mx +b , donde X e Y son dos “tensores”  y le seteamos algunos valores, por ejemplo :
donde m = 1 y b = 1. <br>
Entonces seteamos los datos para esta funcion: para X = 1 , Y =  2 ; para X = 2 , Y = 3; para x = 5 , Y = 6 como modelo de datos , luego hacemos entrenar al "robot" y, cuanto más lo entrene, más va a poder predecir futuros resultados, si le paso el valor de X = 7  me va a poder responder que el resultado, en cuanto más se entrene, nas cerca va a estar del 8.</p>

<p>
Regresion lineal multiple en Tensorflow:
 
Relacionado al método de Machine Learning, se puede definir como la cantidad de datos de entrada comparables bajo una misma escala, relacionables y que influyen en la elaboración de la pendiente de Recursión Y = b + m1 X1 + m2 X2 + … + m(n) X(n)
Por ejemplo, para utilizar este método, habria que representar las variables como tensores, pero éstos se pueden crearse con alguna "dimensión" y así determinar la dimensionalidad del sistema.
</p>


        </div>
        <div class="card fuentes" v-show="this.contador >= 9">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
                <p>
                    (<a href="https://medium.com/datos-y-ciencia/machine-learning-supervisado-fundamentos-de-la-regresi%C3%B3n-lineal-bbcb07fe7fd">2</a>). https://medium.com/datos-y-ciencia/machine-learning-supervisado-fundamentos-de-la-regresi%C3%B3n-lineal-bbcb07fe7fd
                </p>
                <p>
                    (<a href="https://www.aprendemachinelearning.com/regresion-lineal-en-espanol-con-python/">3</a>). https://www.aprendemachinelearning.com/regresion-lineal-en-espanol-con-python/
                    
                </p>

                <p>
                    (<a href="https://cleverdata.io/conceptos-basicos-machine-learning/">4</a>). https://cleverdata.io/conceptos-basicos-machine-learning/
                    
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
    #model h2, #model h3{
        text-align: center;
    }
    #model .fuentes-body{
        margin-left: 2%;
        font-size: 16px;
    }
    #model .contenedorConGrafico{
        display:flex;
        flex-direction:row;
        justify-content: center;
    }
    #model .elemContenedor{
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
