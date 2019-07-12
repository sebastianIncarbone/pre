<template>
<div class="about">

    <div class="circulo">
        <div class="img">
            <span class="base"></span>
            <img src="../assets/logo.png" height="100px" width="100px"/>
        </div>

        <div id="circulo-b1" class="circulo-back">
            <div class="icon">
                <a href="https://www.google.com" target="_blank">
                    <i style="color:white;font-size: 1.5rem;" class="fab fa-github-alt"></i>
                </a>
            </div>
        </div>
        <div id="circulo-b2" class="circulo-back">
            <div class="icon">
                <i style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;" class="fas fa-envelope"></i>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
            </div>
        </div>
    </div>
    
    <div class="circulo">
        <div class="img">
            <span class="base"></span>
            <img src="../assets/nahu.png" height="100px" width="100px"/>
        </div>

        <div id="circulo-b1" class="circulo-back">
            <div class="icon">
                <a href="https://github.com/R4nKF1v3" target="_blank">
                    <i style="color:white;font-size: 1.5rem;" class="fab fa-github-alt"></i>
                </a>
            </div>
        </div>
        <div id="circulo-b2" class="circulo-back">
            <div class="icon">
                <i style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;" class="fas fa-envelope"></i>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                <a href="https://www.linkedin.com/in/nahuel-moscatelli" target="_blank">                
                    <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
    
    <div class="circulo">
        <div class="img">
            <span class="base"></span>
            <img src="../assets/logo.png" height="100px" width="100px"/>
        </div>

        <div id="circulo-b1" class="circulo-back">
            <div class="icon">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-github-alt"></i>
            </div>
        </div>
        <div id="circulo-b2" class="circulo-back">
            <div class="icon">
                <i style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;" class="fas fa-envelope"></i>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
            </div>
        </div>
    </div>
    
    <div class="circulo">
        <div class="img">
            <span class="base"></span>
            <img src="../assets/lauta.png" height="83px" width="105px"/>
        </div>

        <div id="circulo-b1" class="circulo-back">
            <div class="icon">
                <a href="https://github.com/lautarolaghezza" target="_blank">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-github-alt"></i>
                 </a>
            </div>
        </div>
        <div id="circulo-b2" class="circulo-back">
            <div class="icon">
                 <a href="mailto:lautariver35@gmail.com" target="_blank">
                <i style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;" class="fas fa-envelope"></i>
                 </a>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                 <a href="https://ar.linkedin.com/in/lautaro-laghezza-14539715a" target="_blank">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>

</div>
</template>

<script>
    export default {
        name: 'about',
    }
</script>

<style>

    @media only screen and (min-width: 900px) {
        .about{ 
            display: grid;
            grid-auto-rows: minmax(100px,25vh);
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-column-gap: 7rem;
            justify-items: center;
            align-items: center;
        }        
        
    }

    @media only screen and (max-width: 900px) {
        .about{ 
            display: grid;
            grid-auto-rows: minmax(100px,auto);
            grid-template-columns: 1fr 1fr ;
            grid-column-gap: 4rem;
            grid-row-gap: 2rem;
            justify-items: center;
            align-items: flex-end;
        }
    }
    .circulo{
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .circulo .img{
        background: radial-gradient(rgba(152,28,90,.98) 0%,rgba(169,42,81,.98) 58%,rgba(219,42,71,1) 59%,rgba(173,28,90,1) 100%);
        height: 152px;
        width: 152px;
        border-radius: 50%;
        opacity: 1;
        z-index: 3;
    }

    .circulo .img img{
        position: relative;
        top:33px;
        left: 25px;
    }

    .circulo-back{
        clip-path: polygon(10% 0%, 10% 0%, 0% 0%);
        opacity: 0;
        height: 152px;
        width: 152px;
        border-radius: 50%;
        background: rgba(2,72,115,.5);
        margin: auto;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .51s;
        z-index: 0;
    }

    .circulo:hover .circulo-back{
        opacity: 1;
        clip-path: polygon(0 0, 100% 0, 100% 21.3%, 50% 50%, 0 21.3%);
        height: 250px;
        width: 250px;
    }

    .circulo:hover .circulo-back .icon{
        position: absolute;
        top: 8%;
        left: 45.7%;
    }

    .circulo:hover #circulo-b1{
        transform: rotateZ(60deg);
    }

    .circulo:hover #circulo-b2{
        transform: rotateZ(180deg);
    }

    .circulo:hover #circulo-b3{
        transform: rotateZ(300deg);
    }

    #circulo-b1:hover{
        background: #712c8b;
    }

    #circulo-b2:hover {
        background: #ea4335;
    }

    #circulo-b3:hover {
        background: #007bb5;
    }
</style>
