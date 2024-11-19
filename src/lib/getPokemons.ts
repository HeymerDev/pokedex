export const getPokemons = async (limit: number, page: number = 1, search?: string) => {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * limit || 0}`);
        const data = await response.json();

        if (search && search.length > 0) {
            const res: any = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${data.count}`);
            const pokemons = await res.json();
            const pokemonsFlitered = pokemons.results.filter((pokemon: any) => pokemon.name.includes(search.toLowerCase()));
            return { pokemons: pokemonsFlitered.slice(0, limit), count: pokemonsFlitered.length };
        }

        return { pokemons: data.results.slice(0, limit), count: data.count };

    } catch (error) {
        console.log(error);
    }
}

export const getPokemon = async (name: string) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}