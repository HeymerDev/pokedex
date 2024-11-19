import Pagination from "@/components/Pagination";
import PokemonCard from "@/components/PokemonCard";
import Search from "@/components/Search";
import { getPokemons, getPokemon } from "@/lib/getPokemons";
import { Pokemon, PokemonWithImage } from "@/types/pokemon";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; search?: string };
}) {
  const { page, search } = await searchParams;

  const limit = 20;

  let pageNumber = page ? parseInt(page) : 1;
  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
    console.log(
      "Valor no válido como parámetro de página. Se establece a 1. 🐤"
    );
  }

  const { pokemons, count }: any = await getPokemons(limit, pageNumber, search);

  if (!pokemons) {
    return (
      <p className="text-center col-span-full sm:text-8xl font-black mt-3 text-4xl p-4">
        Hubo un error al cargar los pokemones. Por favor intenta de nuevo.
      </p>
    );
  }

  const pokemonsWithImages = await Promise.all(
    pokemons.map(async (pokemon: Pokemon) => {
      const pokemonData = await getPokemon(pokemon.name);
      return {
        name: pokemon.name,
        imageUrl: pokemonData.sprites.other["official-artwork"].front_default,
        types: pokemonData.types.map((t: any) => t.type.name),
      };
    })
  );

  return (
    <>
      <main className=" grid place-items-center">
        <h1 className="sm:text-6xl text-center mt-8 font-bold text-indigo-800 text-4xl">
          Pokemones
        </h1>
        <Search />

        {pokemonsWithImages.length === 0 ? (
          <p className="text-center col-span-full sm:text-8xl font-black mt-3 text-4xl p-4">
            No se encontraron pokemones. Por Favor Ingresa un nombre de pokemon
            valido.
          </p>
        ) : (
          <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
              {pokemonsWithImages.map((pokemon: PokemonWithImage) => (
                <PokemonCard key={pokemon.name} {...pokemon} />
              ))}
            </section>
            <Pagination
              currentPage={pageNumber}
              count={count}
              limitResult={limit}
              searchParams={{ search }}
            />
          </>
        )}
      </main>
    </>
  );
}
