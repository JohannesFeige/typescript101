export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {name: string, url: string}[];
};

export type PokemonResponse = {
    id: number;
    name: string;
    types: Type[];
    sprites: Sprites;
};

type Type = {
    slot: number;
    type: { name: string; url: string };
};

type Sprites = {
    other: {
        'official-artwork': {
            front_default: string;
        };
    };
};
