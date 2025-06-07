import axios from "axios"

const aleatorioNum = () => { return }

const getNombrePokemon = async (id) => axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((resp) => {
        return {
            nombre:resp.data.name,
            id: resp.data.id,
            foto:  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+ resp.data.id+'.svg'
        }
    }
    )

const getListaPokemon = async () => {
    let vector = []

    for (let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * 4) + 1
        vector[i] = await getNombrePokemon(num);

        // console.log(aleatorioNum())
    }
    return vector;
}


/////////////////////////FACHADA
export const consumirListaPokemon = async () => await getListaPokemon();
