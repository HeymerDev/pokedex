import { PokemonWithImage } from "@/types/pokemon";
import { pokemonTypeColors } from "@/utils/colors";
import Link from "next/link";

// Colores suaves con prefijo 'bg-' para cada tipo de Pokémon

const PokemonCard = ({ name, imageUrl, types = [] }: PokemonWithImage) => {
  // Obtener el color basado en el primer tipo del Pokémon
  const backgroundColor: string | any =
    pokemonTypeColors[types[0]] || "bg-gray-300";

  return (
    <article
      key={name}
      className={`group  ${backgroundColor} rounded-xl hover:scale-105 transition-transform duration-500 max-w-[224px]`}
    >
      <Link href={`/pokemon/${name}`}>
        <img
          alt=""
          src={imageUrl}
          className="h-56 w-full rounded-t-xl object-cover transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
          <h3 className="text-lg font-medium text-white">
            {name.toUpperCase()}
          </h3>
        </div>
      </Link>
    </article>
  );
};

export default PokemonCard;
