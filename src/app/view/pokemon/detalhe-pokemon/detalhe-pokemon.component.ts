import { Type } from './../../../model/type';
import { Ability } from './../../../model/ability';
import { Pokemon } from './../../../model/pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'app-detalhe-pokemon',
    templateUrl: './detalhe-pokemon.component.html',
    styleUrls: ['detalhe-pokemon.component.css']
})
export class DetalhePokemonComponent implements OnInit{

    @Input() url = '';
    image = '';
    habilidades: Ability[];
    tipos: Type[];
    pokemons: Pokemon[] = [];

    ngOnInit(): void {
        this.detalhamento();
    }

    constructor(
        private pokemonService: PokemonService
    ){ }

    detalhamento(){
        this.pokemonService.getDetalhes(this.url).subscribe( pk => {
            this.pokemons.push(pk as Pokemon);
            this.image = pk.sprites.front_default;

            this.habilidades = pk.abilities;
            this.tipos = pk.types ;

            console.log(this.pokemons);
        });
    }

    converteUnidade(num): number {
        return num / 10 ;
    }

}
