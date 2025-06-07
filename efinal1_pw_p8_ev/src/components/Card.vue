<template>
    <div class="container">
        <div class="image-container">
            <!-- <img class="imagen-oculta" src="https://placehold.co/200x200/000000/000000.png" alt="No se encontro"> -->
            <img :src="foto" alt="No se encontro">
        </div>
        <p class="nombre-pokemon">{{ nombre }}</p>
    </div>
</template>

<script>
export default {

    props:{
        nombre:{
            type: String,
            required: true,
        },
        foto:{
            type: String,
            required: true
        }
    }

}
</script>

<style scoped>
img{
    position: absolute;
    display: block;
    width: 180px;
    height: 180px;
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