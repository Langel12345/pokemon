export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmalPokemon[];
}

export interface SmalPokemon {
    name: string;
    url:  string;
    id: number;
    img: string;
}
