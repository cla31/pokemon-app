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
  //Pour interagir avec le template sans caster
  pokemonSelected:Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonList);  
  }
  selectPokemon(pokemonId:string){
   //Je vais chercher le pokémon dont j'ai besoin:
   const pokemon  : Pokemon|undefined =this.pokemonList.find(pokemon =>pokemon.id == +pokemonId)
   if(pokemon){
    console.log(`Vous avez demandé le pokémon ${pokemon.name}`); 
    this.pokemonSelected = pokemon;
   }else{
    console.log(`Vous avez demandé un pokémon qui n'existe pas`); 
    this.pokemonSelected = pokemon;
   }
   
  }
}
