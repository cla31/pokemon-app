//import des éléments dont on va avoir besoin dans notre fichier
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  //On va décrire notre template dans un fichier à part.
  //Pas besoin de chemins relatifs car les 2 sont dans le même dossier
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList:Pokemon[] = POKEMONS;  //On indique que Pokemon est un tableau

  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
    
  }
  selectPokemon(pokemon:Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
