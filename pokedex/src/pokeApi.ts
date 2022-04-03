import { PokemonListResponse, PokemonResponse } from './types/api';
import { PokedexResult, Pokemon } from './types/pokemon';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const get = async (url?: string): Promise<PokedexResult> => {
    const data = await fetch(url ?? baseUrl);
    const rawList: PokemonListResponse = await data.json();

    // TODO: get pokemon details
    // const pokedex = await Promise.all(...);

    return {
        pokedex,
        next: rawList.next,
        previous: rawList.previous,
    };
};

export const getPokemonDetails = async ({ id, url }: { id?: number; url?: string }): Promise<Pokemon> => {
    const pokemonUrl = url ?? `${baseUrl}${id}`;
    const data = await fetch(pokemonUrl);

    // TODO: data -> PokemonResponse
    // const rawPokemon: PokemonResponse = ...;

    // TODO: Map to Pokemon
    // const pokemon: Pokemon = ...;

    return pokemon;
};
