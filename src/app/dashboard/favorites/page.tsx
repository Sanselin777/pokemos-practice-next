import {
  FavoritePokemons,
  PokemonGrid,
  PokemonsReponse,
  SimplePokemon,
} from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: "Favorite Pokemons",
  description: "A list of favorite pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorite Pokemons <small className="text-blue-500">Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}
