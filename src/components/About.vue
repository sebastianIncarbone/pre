<template>
<div class="abaut">

    <div class="circulo c1">
        <div class="img" v-on="on">
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
                <v-icon style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;">fa-envelope</v-icon>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
            </div>
        </div>
    </div>
    
    <div class="circulo c2">
        <div class="img" v-on="on">
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
                <v-icon style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;">fa-envelope</v-icon>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
            </div>
        </div>
    </div>
    
    <div class="circulo c3">
        <div class="img" v-on="on">
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
                <v-icon style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;">fa-envelope</v-icon>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
            </div>
        </div>
    </div>
    
    <div class="circulo c4">
        <div class="img" v-on="on">
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
                <v-icon style="color:white;transform:rotateZ(180deg);font-size: 1.5rem;">fa-envelope</v-icon>
            </div>
        </div>
        <div id="circulo-b3" class="circulo-back">
            <div class="icon">
                <i style="color:white;font-size: 1.5rem;" class="fab fa-linkedin"></i>
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
.circulo{
    margin: auto;
    margin-top: 40px;
    margin-bottom: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.circulo .img{
    background: radial-gradient(rgba(183,222,237,1) 0%,rgba(113,206,239,1) 60%,rgba(33,180,226,1) 61%,rgba(183,222,237,1) 100%);
    height: 152px;
    width: 152px;
    border-radius: 50%;
    opacity: 1;
    z-index: 3;
}

.circulo .img::before{
    background: radial-gradient(rgba(183,222,237,1) 0%,rgb(174, 216, 231) 60%,rgba(33,180,226,1) 61%,rgba(183,222,237,1) 100%);
    clip-path: polygon(0% 100%, 99% 99%, 100% 57%, 95% 55%, 91% 53%, 86% 53%, 81% 54%, 77% 56%, 74% 58%, 70% 60%, 65% 62%, 61% 60%, 56% 57%, 52% 56%, 49% 55%, 45% 53%, 41% 52%, 36% 52%, 31% 51%, 27% 51%, 24% 50%, 20% 49%, 16% 51%, 12% 52%, 9% 53%, 6% 56%, 3% 58%, 1% 60%, 0% 63%);
    position: absolute;
    padding-top: 152px;
    padding-right: 152px;
    content:" ";
    height: 100px;
    width: 100px;
    border-radius: 50%;
    opacity: 1;
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
    background: #1d74bbb9;
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
