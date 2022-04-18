import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concat } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {

  loading: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  get collectedPokemons(): any[] {
    return this.pokemonService.collectedPokemons;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getType(pokemon: any): string {
    return this.pokemonService.getType(pokemon);
  }

}