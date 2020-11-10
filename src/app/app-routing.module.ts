import { HomeComponent } from './view/home/home.component';
import { ListagemPokemonComponent } from './view/pokemon/listagem-pokemon/listagem-pokemon.component';
import { DetalhePokemonComponent } from './view/pokemon/detalhe-pokemon/detalhe-pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'pokemon/detalhe-pokemon', component: DetalhePokemonComponent },
    { path: 'pokemon/listagem-pokemon', component: ListagemPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
