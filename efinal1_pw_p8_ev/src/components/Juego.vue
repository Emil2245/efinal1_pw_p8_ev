<template>
    <div class="container">
        <div class="contador">
            <p>Puntaje: {{ this.puntos  }}</p>
            <p>Intento: {{ this.intentos }}</p>
        </div>
            <Card v-for="pokemon in listaPokemon" :key="pokemon.id" :nombre="pokemon.nombre" :foto="pokemon.foto"></Card>
         <div v-if="haPerdido">
            <h2>Ha utilizado tus 5 intentos</h2>
            <h2>El Juego ha terminado, intentalo otra vez</h2>
         </div>
         <div v-if="haGanado">
            <h3>Puntaje: {{ puntos }}</h3>
            <h3>Felicitaciones has ganado un premio de $10.000,00</h3>
         </div>
        <button @click="iniciarJuego()" :disabled="haPerdido">JUGAR</button>
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
            intentos: 0,
            haPerdido: false,
            haGanado: false,

        }
    },
    components: {
        Card
    },
    methods: {
        async iniciarJuego() {
            const contador = 0;
            this.haGanado = (this.puntos>=10) 
            this.haPerdido=(this.intentos>=5)
            


            this.listaPokemon = await consumirListaPokemon()


            if (this.listaPokemon[0].id === this.listaPokemon[1].id 
            && this.listaPokemon[0].id === this.listaPokemon[2].id) 
            {this.puntos = this.puntos + 5}
            else if (this.listaPokemon[0].id === this.listaPokemon[1].id 
            || this.listaPokemon[0].id === this.listaPokemon[2].id)
            {this.puntos = this.puntos + 3 }
            else{
                
            }

            this.intentos= this.intentos+1;

                // console.log(this.listaPokemon)
        }

    },
    // computed:{
    //     getFoto(){
    //         return 
    //     }
    // },
    watch: {
        // verificarPuntos(){

        // }
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
h2{
    color: red;

}
h3{
    color: blue
}
</style>