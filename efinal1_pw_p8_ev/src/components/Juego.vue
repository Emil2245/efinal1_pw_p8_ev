<template>
    <div class="container">

        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
</template>

<script>
import { consumirListaPokemon } from '@/clients/Juego.js'

import Card from '@/components/Card.vue'
export default {
    data() {
        return {
            listaPokemon: [],
            puntos: 0,

        }
    },
    components: {
        Card
    },
    methods: {
        iniciarJuego() {
            this.listaPokemon = consumirListaPokemon()
            console.log(this.listaPokemon)
        }

    },
    mounted() {
        this.iniciarJuego()
    }

}
</script>

<style scoped>
.container {
    grid-template-rows: 50px 50px 50px;
}
</style>