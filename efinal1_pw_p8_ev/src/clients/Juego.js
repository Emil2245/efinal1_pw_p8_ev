import axios from "axios"

const aleatorioNum = () => Math.floor(Math.random() * 4) + 1

const getNombrePokemon = async (id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((resp) => resp.data.name)

const getListaPokemon = async () => {
    let vector = []
    for (let i; i < 4; i++) {
        vector[i] = await getNombrePokemon(aleatorioNum());
    }
    return vector;
}


/////////////////////////FACHADA
export const consumirListaPokemon = async () => await getListaPokemon()
