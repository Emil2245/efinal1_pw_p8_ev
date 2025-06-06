<template>
    <div class="container">
        <div class="image-container">
            <img class="imagen-oculta" src="https://placehold.co/200x200/000000/000000.png" alt="No se encontro">
            <img src="" alt="No se encontro">
        </div>
        <p class="nombre-pokemon">HHHHHH</p>
    </div>
</template>

<script>
export default {

    props:{
        sumarPuntos:{
            type: Function,
            required: true,
        }
    }

}
</script>

<style scoped>
img{
    position: absolute;
    display: block;
}
p{
    display: block;
}
.container{
    display: grid;
    grid-template-rows: 20 ;
    margin: 20px;
}
</style>