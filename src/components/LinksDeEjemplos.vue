<template>
    <div class="ejemplo">
        <div class="mnj1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 564">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Ejemplos">
                        <path class="cls-1" d="M500,0H91.8A91.8,91.8,0,0,0,0,91.8V564l59.07-36.68c27.13-16.84,109-25.89,140.93-26.12,108.45-.8,307.11-1.2,315-1.2H886.12A113.89,113.89,0,0,0,1000,386.12V115.76A115.76,115.76,0,0,0,884.24,0Z"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="mnj2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.62 310.55">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Ejemplos">
                        <path class="cls-1" d="M275.31,0H500.07a50.55,50.55,0,0,1,50.55,50.55v260l-32.52-20.2c-15-9.27-60-14.25-77.6-14.38-59.72-.44-169.1-.66-173.47-.66H62.7A62.7,62.7,0,0,1,0,212.61V63.74A63.74,63.74,0,0,1,63.74,0Z"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="mnj3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.62 310.55">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Ejemplos">
                        <path class="cls-1" d="M275.31,0H50.55A50.55,50.55,0,0,0,0,50.55v260l32.53-20.2c14.94-9.27,60-14.25,77.59-14.38,59.72-.44,169.1-.66,173.47-.66H487.92a62.7,62.7,0,0,0,62.7-62.7V63.74A63.74,63.74,0,0,0,486.88,0Z"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="mnj4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 564">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Ejemplos">
                        <path d="M500,0H908.2A91.8,91.8,0,0,1,1000,91.8V564l-59.07-36.68c-27.13-16.84-109-25.89-140.93-26.12-108.45-.8-307.11-1.2-315-1.2H113.88A113.89,113.89,0,0,1,0,386.12V115.76A115.76,115.76,0,0,1,115.76,0Z"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
 name:'linksDeEjemplos',
}
</script>

<style>

    .ejemplo .mnj1 .cls-1{fill:#ebebeb;}

    .ejemplo .mnj2 .cls-1{fill:#072940;}
    
    .ejemplo .mnj3 .cls-1{fill:#f23b3d;}
    
    @media only screen and (min-width: 900px) {
        .ejemplo{
            margin-top: 10%;
        }
    }
    
    @media only screen and (max-width: 900px) {
        .ejemplo{
            margin-top: 15%;
        }
    }

    .ejemplo{
        padding:2.4em;
    }

    .ejemplo .mnj1{
        transform: rotateZ(0deg);
        width:55vw;
    }
    
    .ejemplo .mnj2{
        transform: rotateZ(0deg);
        float:right;
        width:40vw;
        height:auto;
    }
    
    .ejemplo .mnj3{
        transform: rotateZ(0deg);
        float:left;
        width:40vw;
    }
    
    .ejemplo .mnj4{
        transform: rotateZ(0deg);
        float:right;
        width:50vw;
    }
    
    .ejemplo .mnj1:active{
        transform: rotateZ(30deg);
        transition:1s;
    }
    
    .ejemplo .mnj2:active{
        transform: rotateZ(-30deg);
        transition:1s;
    }
    
    .ejemplo .mnj3:active{
        transform: rotateZ(30deg);
        transition:1s;
    }
    
    .ejemplo .mnj4:active{
        transform: rotateZ(-30deg);
        transition:1s;
    }

</style>
