//import des éléments dont on va avoir besoin dans notre fichier
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

//On utilise l'importation sous la forme d'un décorateur, ça va
// permettre de construire un composant web avec angular.
//Selector permet de donner un nom à notre composant, pour l'identifier par la suite.
//Dans le Html, c'est la balise app-root qui sera insérée
//Avec angular, on peut définir nos propres éléments html personnalisés.
//Le template permet de definir le code html associé à ce template.
//Il affiche la propriété title de l'AppComponent qu'angular va pousser ds le template
@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`
})
export class AppComponent implements OnInit {
  // pokemonList = ['Bulbizarre','Salamèche','Carapuce'];
  //Récupération de tous les Pokémons dans la constante de Mock:
  pokemonList:Pokemon[] = POKEMONS;  //On indique que Pokemon est un tableau

  ngOnInit(){
    console.table(this.pokemonList);
    //On teste ici l'appel de la méthode
    // this.selectPokemon('Bulbizarre')
    //Ici je dois désormais écrire un objet métier Pokémon
    this.selectPokemon(this.pokemonList[0]);
    
  }
  //On peut déclarer des méthodes dans la classe de nos composants
  //On importe la classe depuis le ficier Pokemon.
  //Intérêt: structure de données définies en typescript: il s'agit bien d'un pokémon avec point de vies, identifiant etc.
  selectPokemon(pokemon:Pokemon){
    //syntaxe qui évite la concétanisation et gère les espaces
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
