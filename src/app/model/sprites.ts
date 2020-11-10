import { Generation } from './generation';
import { Sprite } from './sprite';
export interface Sprites {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: Sprite[];
    versions: Generation[];
}
