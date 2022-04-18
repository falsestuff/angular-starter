import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  loading: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  get wishlistedPokemons(): any[] {
    return this.pokemonService.wishlistedPokemons;
  }

  ngOnInit(): void {
  }

  getType(pokemon: any): string {
    return this.pokemonService.getType(pokemon);
  }

}