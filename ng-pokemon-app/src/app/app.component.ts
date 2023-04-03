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
  }
  //Avec l'input ds le template, changement du contrat d'interface:
  selectPokemon(event:MouseEvent){
    //On est obligé de caster l'évènemement en HTMLInputElement (propre à Angular)
    // Le "+" transforme tout ce qui est à droite en un NonNullableFormBuilder.
    const index:number=+(event.target as HTMLInputElement).value;
    //On demande l'index qu'à passé l'utilisateur:
    // Je rentre un nombre, je clique sur le nombre, et le Pokémon de la liste s'affiche
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }
}
