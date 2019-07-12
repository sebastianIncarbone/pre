<template>
    <div id="parad">
        <div class="incrementar" >
            <h1 @click="sumar()"><i class="fas fa-chevron-right"></i></h1>
        </div>
        <div class="decrementar" >
            <h1 @click="restar()"><i class="fas fa-chevron-left"></i></h1>
        </div>
        <div class="card que" v-show="this.contador <= 0">
            <h2>¿Qué es un Paradigma?</h2>
            <!-- - [Ami] -> Que es un Paradigma? -->
            <p class="paradigmas">
                Son mecanismos que permiten que se pueda procesar toda aquella información nueva que
                percibimos transformándola en conocimiento, también llamados mecanismos de aprendizaje.
                <br> Según la problemática a la que se enfrentarán, el ambiente que les rodeará y qué factores 
                influyen en la toma de decisiones, se podrán evaluar distintos algoritmos del aprendizaje automatizado
                <br>
                <br>
                Aprendizaje supervisado
                <br>Aprendizaje no supervisado
                <br> Aprendizaje por refuerzo
                <br> Aprendizaje semisupervisado: Combinan los dos algoritmos anteriores para poder clasificar de manera adecuada. Se tiene en cuenta los datos marcados y los no marcados.
                <br>Transducción: Similar al aprendizaje supervisado, pero no construye de forma explícita una función. 
                <br>Aprendizaje multi-tarea: Usan conocimiento previamente aprendido 
                <br>Árboles de decisiones: Se mapean observaciones sobre un objeto con conclusiones sobre el valor final de dicho objeto.
                <br>Reglas de asociación: Procuran descubrir relaciones interesantes entre variables.
                <br>Algoritmos genéticos: Procesos de búsqueda heurística que simulan la selección natural. Usan métodos tales como la mutación y el cruzamiento para generar nuevas clases que puedan ofrecer una buena solución a un problema dado.
                <br>Redes neuronales artificiales
               <br> Máquinas de vectores de soporte (MVS)
                <br>Algoritmos de agrupamiento
        
            </p>

        </div>
        <div class="card supervisado" v-show="this.contador == 1">
            <h3>Supervisado</h3>
            <!-- - [Ama] -> Supervisado -->
            <p>
            Estos métodos son los más sencillos de realizar. En ellos se parte de un conocimiento a priori.
            <br> El objetivo es, mediante unos datos de entrenamiento (se necesita intervención humana), deducir una función que haga lo mejor posible
            el mapeo entre unas entradas y una salida. 
            <br> Los datos de entrenamiento constan de tuplas (X,Y), siendo
             X las variables que predicen una determinada salida Y.
            <br>La variable a predecir Y puede ser una variable cuantitativa (como en el caso de problemas de regresión (predicen un valor numérico))
            o cualitativa (como en el caso de problemas de clasificación).
            Aplicación: - Detección de fraudebanario.
            <br> - Previsión de deterioro en la maquinaria de una compañía.
            </p>

            <p style="margin-left:160px" >
                <img src="../assets/aprendizajeSupervisado.png" height="230px" width="420px" /> 
            </p>

        </div>
        <div class="card noSupervisado" v-show="this.contador == 2">
            <h3>No supervisado</h3>
            <!-- - [Nahu] -> No Supervisado -->
            <p>
                En este tipo de Machine Learning no ocurre interacción humana, y el algoritmo aprende en base a datos no etiquetados buscando patrones o relaciones entre ellos. Usualmente se usa con Deep Learning.
            </p>
            <div class="contenedorConGrafico">
                <div> <p>Existen dos tipos de algoritmos:</p> </div>
                <div>
                    <p>
                        -	Clustering: clasifica en grupos los datos de salida. Es el caso de las segmentaciones de clientes según qué hayan comprado.
                    </p>
                    <p>
                        -	Asociación: descubre reglas dentro del conjunto de datos.
                    </p>
                </div>
            </div>
            <div class="contenedorConGrafico">
                <div class="elemContenedor"> 
                    <img src="../assets/spurious-correlations.png" height="232px" width="400px"/> 
                </div>
                <div class="elemContenedor">
                    <p>
                        En ocasiones, al explorar los datos sin un objetivo definido, se pueden encontrar correlaciones espúreas curiosas, pero poco prácticas. Por ejemplo, en la gráfica, publicada en la web de Tyler Vigen Spurious Correlations, podemos apreciar una fuerte correlación entre el consumo per cápita de pollo en Estados Unidos y sus importaciones de petróleo.
                    </p>
                </div>
            </div>
        </div>
        <div class="card reforzado" v-show="this.contador == 3">
            <h3>Reforzado</h3>
            <!-- - [Nahu] -> Reforzado -->
            <p>
                El Aprendizaje Reforzado es una extensión del paradigma No Supervisado que introduce dos variables importantes al momento de entrenar a la IA: Refuerzos Positivos y Refuerzos Negativos.
            </p>
            <p>
                Los Refuerzos o Recompensas son condicionamientos que se programan de manera previa indicando resultados deseables o no deseables al momento de llegar a una conclusión tras cada iteración del entrenamiento del programa.
            </p>
            <p>
                Un ejemplo claro y reciente de ésta metodología es AlphaGo Zero, sucesora del AlphaGo, que era una IA capaz de jugar al Go que fue capaz de vencer a un campeón humano tras analizar miles de partidas. A diferencia del AlphaGo, AlphaGo Zero logró los mismos resultados en solo 3 días de entrenamiento y ganó 100 veces seguidas a su predecesora, todo habiendo jugado únicamente contra si misma con variables de refuerzo millones de veces.
            </p>
            <p class="contenedorConGrafico">
                <iframe width="440" height="175" src="https://www.youtube.com/embed/Pn_zGDJwkcU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
        </div>
        <div class="card fuentes" v-show="this.contador >= 4">
            <h2>Fuentes</h2>
            <!-- - [Todos] -> Fuentes -->
            <div class="fuentes-body">
                <p>
                    <a href="https://www.raona.com/los-10-algoritmos-esenciales-machine-learning/"><i class="fas fa-link"></i></a> https://www.raona.com/los-10-algoritmos-esenciales-machine-learning
                </p>
                <p>   
                    <a href="https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico#Modelos"><i class="fas fa-link"></i></a> https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico#Modelos
                 </p>
                <p>                   
                    <a href="https://blog.bismart.com/es/diferencias-machine-learning-supervisado-no-supervisado"><i class="fas fa-link"></i></a> https://blog.bismart.com/es/diferencias-machine-learning-supervisado-no-supervisado
                </p>
                <p>
                    <a href="https://empresas.blogthinkbig.com/que-algoritmo-elegir-en-ml-aprendizaje/"><i class="fas fa-link"></i></a> https://empresas.blogthinkbig.com/que-algoritmo-elegir-en-ml-aprendizaje/
                </p>
                <p>
                    <a href="https://www.xataka.com/inteligencia-artificial/conceptos-inteligencia-artificial-que-aprendizaje-refuerzo"><i class="fas fa-link"></i></a> https://www.xataka.com/inteligencia-artificial/conceptos-inteligencia-artificial-que-aprendizaje-refuerzo
                </p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
 name:'paradigmas',
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
    #parad{
        display: flexbox;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: hidden;
        padding: 3em;
    }
    #parad h2, #parad h3{
        text-align: center;
    }
    #parad .fuentes-body{
        margin-left: 2%;
        font-size: 16px;
    }
    #parad .contenedorConGrafico{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
    }
    #parad .elemContenedor{
        display:flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;
        margin-right: 0.5%;
        margin-left: 0.5%;
        text-align: justify;
    }
</style>
