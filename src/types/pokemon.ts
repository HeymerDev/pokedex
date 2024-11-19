export interface PokemonWithImage {
    name: string;
    imageUrl: string;
    types: string[];
}

export interface Pokemon {
    name: string;
    url: string;
}

export type PokemonType =
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy";

// Usamos un enum para los nombres de los tipos
export enum PokemonTypes {
    Normal = "normal",
    Fire = "fire",
    Water = "water",
    Electric = "electric",
    Grass = "grass",
    Ice = "ice",
    Fighting = "fighting",
    Poison = "poison",
    Ground = "ground",
    Flying = "flying",
    Psychic = "psychic",
    Bug = "bug",
    Rock = "rock",
    Ghost = "ghost",
    Dragon = "dragon",
    Dark = "dark",
    Steel = "steel",
    Fairy = "fairy",
}