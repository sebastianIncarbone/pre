<template>
    <div id="parad">
        <div class="incrementar" >
            <h1 @click="sumar()"><i class="fas fa-chevron-right"></i></h1>
        </div>
        <div class="decrementar" >
            <h1 @click="restar()"><i class="fas fa-chevron-left"></i></h1>
        </div>
        <div class="card que" v-show="this.contador <= 0">
            <h2>¿Que es un Paradigma?</h2>
            <!-- - [Ami] -> Que es un Paradigma? -->
        </div>
        <div class="card CualesHay" v-show="this.contador == 1">
            <h2>¿Cuáles hay dentro de ML?</h2>
            <!-- - [Ami] -> Cuales hay en este campo de ML? -->
        </div>
        <div class="card supervisado" v-show="this.contador == 2">
            <h3>Supervisado</h3>
            <!-- - [Ami] -> Supervisado -->
        </div>
        <div class="card noSupervisado" v-show="this.contador == 3">
            <h3>No supervisado</h3>
            <!-- - [Nahu] -> No Supervisado -->
        </div>
        <div class="card reforzado" v-show="this.contador == 4">
            <h3>Reforzado</h3>
            <!-- - [Nahu] -> Reforzado -->
        </div>
        <div class="card fuentes" v-show="this.contador >= 5">
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
    #parad .decrementar{
        position: absolute;
        top:50vh;
        left:20px;
        cursor: pointer;
    }
    #parad .incrementar{
        position: absolute;
        top:50vh;
        right:50px;
        cursor: pointer;
    }
    #parad .card{
        border-radius: 2rem;
        position: absolute;
        height: 80vh;
        width: 90vw;
        background: rgba(54, 53, 55, 0.5);
    }
    #parad h2, #parad h3{
        text-align: center;
    }
    #parad .fuentes-body{
        margin-left: 2%;
        font-size: 16px;
    }
</style>
