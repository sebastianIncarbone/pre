<template>
    <div class="menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Menu">
                    <path class="cls-1" d="M0,75H100v6.82A18.18,18.18,0,0,1,81.82,100H0Z"/>
                    <rect class="cls-1" y="37" width="100" height="25"/>
                    <path class="cls-1" d="M15.4,0H100V25H0V15.4A15.39,15.39,0,0,1,15.4,0Z"/>
                </g>
            </g>
        </svg>
        <div class="bg-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 104.22">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Menu">
                        <path class="cls-1" d="M62,6.22c-11.44,2.67-21.84,8.19-31,3-4-2.28-4.4-4.7-9-7C14.58-1.49,6.18.12,0,2.22v102H100v-97C83.36,3,70.75,4.18,62,6.22Z"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
 name:'menuIcon',
}
</script>

<style>
    .menu .cls-1{
        fill:#151226;
    }

    .menu .bg-menu .cls-1{
        fill:#f22259;
    }

    .menu{
        overflow:hidden;
    }

</style>
