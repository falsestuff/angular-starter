import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = environment.apiUrl + 'pokemon/';
  private _pokemons: any[] = [];
  private _next: string = '';
  private _savedToCollection: any[] = [];
  private _savedToWishlist: any[] = [];

  constructor(private http: HttpClient) {
  }

  get pokemons(): any[] {
    return this._pokemons;
  }

  get collectedPokemons(): any[] {
    return this._savedToCollection;
  }

  get wishlistedPokemons(): any[] {
    return this._savedToWishlist;
  }
  
  get next(): string {
    return this._next;
  }

  set next(next: string) {
    this._next = next;
  }

  getType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }

  get(name: string): Observable<any> {
    return this.http.get(`${this.url}${name}`);
  }

  getNext(): Observable<any> {
    const url = this.next === '' ? `${this.url}?limit=100` : this.next;
    return this.http.get(url);
  }

  getEvolution(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}evolution-chain/${id}`);
  }

  getSpecies(name: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}pokemon-species/${name}`);
  }

  saveToCollection(name: any) {
    this._savedToCollection.push(name)
  }

  saveToWishlist(name: any) {
    this._savedToWishlist.push(name)
  }
}