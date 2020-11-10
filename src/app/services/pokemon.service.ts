import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient){}

    getListaPokemons(page, pageSize):Observable<any> {
        return this.http.get<any>(`${API_URL}pokemon?limit=${pageSize}&offset=${page}`);
    }

    getDetalhes(url): Observable<any> {
        return this.http.get<any>(url);
    }
}
