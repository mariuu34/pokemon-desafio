import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetalhePokemonComponent } from './detalhe-pokemon/detalhe-pokemon.component';
import { ListagemPokemonComponent } from './listagem-pokemon/listagem-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      DetalhePokemonComponent,
      ListagemPokemonComponent,
    ],
    imports: [
      CommonModule,
      TableModule,
      HttpClientModule,
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule
    ],
    providers: [],
})
export class PokemonModule { }
