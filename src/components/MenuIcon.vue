<template>
    <div class="menu">
        <div class="bg-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 104.22">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Menu">
                        <path class="cls-1" d="M62,6.22c-2.44,2.67-21.84,8.19-31,3-4-2.28-4.4-4.7-9-7C14.58-1.49,6.18.12,0,2.22v102H100v-97C83.36,3,70.75,4.18,62,6.22Z"/>
                    </g>
                </g>
            </svg>
        </div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="menuIcon">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Menu">
                    <path class="cls-1" d="M0,75H100v6.82A18.18,18.18,0,0,1,81.82,100H0Z"/>
                    <rect class="cls-1" y="37" width="100" height="25"/>
                    <path class="cls-1" d="M15.4,0H100V25H0V15.4A15.39,15.39,0,0,1,15.4,0Z"/>
                </g>
            </g>
        </svg> -->
        
        <h2 class="menuIcon" v-bind:style="{'background-position-y': this.position + 'px'}">T&HW</h2>
    </div>
</template>

<script>
export default {
    name:'menuIcon',
    data(){
        return{
            position: 0,
        }
    },
    methods: {
        handle(e) {
            let scrollPosition = window.scrollY;
            let windowHeight = window.innerHeight;
            let documentHeight = window.document.documentElement.scrollHeight;
            let y = 100 * scrollPosition / (documentHeight - windowHeight);
            this.position = 24 - parseInt(y) * 0.28;
        }
    },
    created(){
        window.addEventListener('scroll', this.handle);
    },
    destroyed(){
        window.removeEventListener('scroll', this.handle);
    }
}
</script>

<style>

    .menu .menuIcon{
        background-image: url("../assets/fondoMenu.svg");
        background-size: 120%;
        background-repeat: repeat-x;
        position: absolute;
        top:0px;
        right:0px;
        color:rgba(70, 93, 196, 0.137);
        background-clip: text;
        font-size: 2rem;
        z-index: 20;
        overflow: hidden;
        animation: 7s efectoOlas linear infinite;
    }

    .menu .bg-menu .cls-1{
        fill:#f22259;
    }

    .menu .bg-menu{
        display: none;
        position: relative;
        top:10px;
        right: 0px;
        z-index: 19;
    }

    @keyframes efectoOlas{
        0%{
            background-position-x: 8px;
        }
        50%{
            background-position-x: -11px;
        }
        100%{
            background-position-x: 8px;
        }
    }

</style>
