import { DetalhePokemonComponent } from './../detalhe-pokemon/detalhe-pokemon.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Modelo } from 'src/app/model/modelo';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'app-listagem-pokemon',
    templateUrl: './listagem-pokemon.component.html',
    styleUrls: ['listagem-pokemon.component.css']
})
export class ListagemPokemonComponent implements OnInit{

    @ViewChild('detalhes') detalhe: DetalhePokemonComponent;

    isSelecionado: boolean = false;
    url = '';

    totalElements: number;
    page = 0;
    pageSize = 10;

    listaPokemons: Modelo[];

    ngOnInit(): void {
    }

    constructor(
        private pokemonService: PokemonService,
   ){}

    changePage(event: LazyLoadEvent) {
        this.page = event.first / event.rows;
        this.pageSize = 10;
        this.pesquisar(this.page, this.pageSize);
    }

    public direciona(url: string){
        this.isSelecionado = true;
        this.url = url;
    }

    private pesquisar(page = 0 , pageSize = 10) {
        this.pokemonService.getListaPokemons(page , pageSize).subscribe( pks => {
          this.listaPokemons = pks.results;
          this.totalElements = pks.count;
        });
    }

    limpar(){
        this.url = '';
        this.isSelecionado = false;
        this.pesquisar();
    }
}
