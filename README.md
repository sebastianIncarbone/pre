# pre

## Temario

- Introduccion
    - [Lau] -> Historia breve
    - [Seba] -> Redes neuronales concepto
    - [Ami] -> Que es machine learning?
    - [Nahu] -> Como se relaciona con la Inteligencia Artificial
    - [Lau] -> Diferencias con Deep Learning
- Modelo
    - [Lau] -> Que es un modelo?
    - [Seba] -> Que datos ingresan en un modelo?
    - [Ami] -> Los parametros del modelo
    - [Nahu] -> El error
    - [Lau] -> Que es regresion lineal?
    - [Seba] -> Metodo de cuadrados ordinarios
    - [Nahu] -> Regrecion Lineal Simple
    - [Lau] -> Regrecion Lineal Multiple
    - [Seba] -> Comparar con tensor flow
- Paradigmas
    - [Ami] -> Que es un Paradigma?
    - [Nahu] -> Cuales hay en este campo de ML?
    - [Lau] -> Supervisado
    - [Seba] -> No Supervisado
    - [Nahu] -> Reforzado
- Ejemplo
    - [Lau] -> tensor flow
    - [Seba] -> muestra de la demo	

#Modelo

##Que es un modelo?

    Un modelo busca el equilibrio entre aproximarce en reprecentar correctamente la realidad
    y ser simple para poder utilizarlo. Imaginemos a un ave, Pepita... podemos aproximarnos en un
    primer modelo, a que un ave puede volar. pero que pasa? es un poco basico por que no todas las 
    aves saben volar. Por lo tanto actualizamos el modelo y decimos que si un ave es adulta y esta 
    herida no puede volar. Pero de repente nos vamos un poco mas al sur... y que aparece un pinguino 
    que es ave... si! pero carece de la posibilidad alguna de despegarse del suelo 
    Entonces ajustamos nuevamente nuestro modelo a las variaciones de la realidad que estamos modelando 
    pero al final acabaremso teniendo un modelo muy complejo con todas las ecepciones  de porque un ave
    vuela o no. Una alternativa a esto es hacer uso de la probabilidad, para decir 
    matematicamente que la mayoria de aves pueden volar.
    La provabilidad es la herramienta perfecta para resumir nuestra insertidumbre sobre un tema. 

##Los datos

    Toma de contacto con la realidad, las mediciones que hacemos de ella. A partir de esto vamos a extraer
    toda la informacion para construir nuestro modelo.
    Algo importante al saber es que los datos son multidimencionales. Es decir, si estamos construyendo un
    conjuntod e datos de una persona, cada una de las propiedades de esta persona reprecenta una dimencion 
    por si misma. Todos esos datos hacen que una personaje este reprecentada como un punto en un mapa 
    multidimencional

##Los Parametros

    Son los datos que podemos modificar, estos valores son los parametros del modelo y son los unicos que nos 
    aportan la flexibilidad para poder ajustarnos a los datos.
            
## El error

    Es necesario siempre definir una funcion de error que permita definir como el modelo se ajusta o no a los datos.
    Normalmente cuando se usa algoritmos de aprendijase supervisado esta funcion se computa a partir de los datos de 
    salida suministrados.
    En caso de un algoritmo de aprendisaje no supervisado, otras medidas se computan a base de los datos de entrada.
    Esta señal de error es muy importante por que es a partir de la cual se ajustara el modelo. En un proceso que es
    denominado obtimizacion normalmente conocida como <strong>Entrenamiento</strong>.  

#Paradigmas

##Aprendizaje no supervisado
    Puede producir conocimiento unicamente de los datos que se proporcionan como entrada.
    sin necesidad de expresarle al sistema que resultado queremos obtener.
    Obtiene la posibilidad de saber si una cosa es igual a otra cosa. que pasa con respecto al anterior?
    En este caso no es necesario proporcionar una base de datos gigantesca para inferir sobre el resultado del sistema.
    ya que el propio algorimo es capaz de desambiguar las similitudes.
    Espacios latentes

##Aprendizaje supervisado
    Se basa en responder la conexion existente entre una variable de entrada y una variable de salida.
    Surje de responder cual es el resultado que queremos obtener para un derterminado valor.
    -Ej1
    1=2
    2=4
    6=12
    9=18
    ahora que resultado vamos a obtener del 10? exactamente 20!
    -Ej2
    Que correo es span o no?
    -Ej3
    A partir de una cuenta de instagram se puede saber si una persona puede sufir deprecion?