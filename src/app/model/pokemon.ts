import { Ability } from './ability';
import { Sprites } from './sprites';
import { Type } from './type';
import { Modelo } from './modelo';
import { Stat } from './stat';
export class Pokemon {

    id: number;
    name: string;
    abilities: Ability[];
    height: number;
    weight: number;
    species: Modelo;
    types: Type[];
    stats: Stat[];
    sprites: Sprites;
    base_experience: number;
}
