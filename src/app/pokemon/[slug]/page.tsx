import React from "react";
import { getPokemon } from "@/lib/getPokemons";
import { notFound } from "next/navigation";
import { pokemonTypeColors } from "@/utils/colors"; // Asegúrate de tener la ruta correcta

export default async function PokemonPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const currentPokemon = await getPokemon(slug);
  if (!currentPokemon) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto p-6 bg-white  space-y-6 grid place-content-center">
      <h2 className="text-4xl font-bold text-center text-indigo-800">
        {currentPokemon.name.charAt(0).toUpperCase() +
          currentPokemon.name.slice(1)}
      </h2>

      <div className="flex justify-center">
        <img
          src={currentPokemon.sprites.other["official-artwork"].front_default}
          alt={currentPokemon.name}
          className="w-96 h-96 object-cover rounded-lg "
        />
      </div>

      <section>
        <h3 className="text-2xl font-semibold text-gray-800">Types</h3>
        <ul className="flex space-x-3 mt-2">
          {currentPokemon.types.map((type: any) => (
            <li key={type.type.name}>
              <span
                className={`inline-block px-4 py-2 rounded-full text-white font-medium text-sm sm:text-base ${
                  pokemonTypeColors[type.type.name] || "bg-gray-300"
                }`}
              >
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-800">Abilities</h3>
        <ul className="flex space-x-3 mt-2">
          {currentPokemon.abilities.map((ability: any) => (
            <li key={ability.ability.name}>
              <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-800  text-sm sm:text-base font-medium">
                {ability.ability.name.charAt(0).toUpperCase() +
                  ability.ability.name.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
