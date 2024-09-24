import Link from "next/link";
import React from "react";
import Image from "next/image";

const PokemonCard = ({ id, name, image }) => {
  return (
    <Link href={`/pokemons/${id}`}>
      <div className="pokemon-card border p-4 rounded shadow-lg cursor-pointer">
        <div className="text-center">
          <Image
            src={image}
            alt={name}
            width={96} // w-24 en Tailwind es igual a 96px
            height={96} // h-24 en Tailwind es igual a 96px
            className="mx-auto"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">#{id}</h2>
          <p className="text-lg capitalize">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
