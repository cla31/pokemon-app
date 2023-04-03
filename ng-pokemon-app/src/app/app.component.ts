//import des éléments dont on va avoir besoin dans notre fichier
import { Component, OnInit } from '@angular/core';

//On utilise l'importation sous la forme d'un décorateur, ça va
// permettre de construire un composant web avec angular.
//Selector permet de donner un nom à notre composant, pour l'identifier par la suite.
//Dans le Html, c'est la balise app-root qui sera insérée
//Avec angular, on peut définir nos propres éléments html personnalisés.
//Le template permet de definir le code html associé à ce template.
//Il affiche la propriété title de l'AppComponent qu'angular va pousser ds le template
@Component({
  selector: 'app-root',
  template: `<h1> Welcome to {{pokemonList[1]}}!</h1>`
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre','Salamèche','Carapuce'];

  ngOnInit(){
    console.table(this.pokemonList);
    //On teste ici l'appel de la méthode
    this.selectPokemon('Bulbizarre')
    
  }
  //On peut déclarer des méthodes dans la classe de nos composants
  selectPokemon(pokemonName:string){
    //syntaxe qui évite la concétanisation et gère les espaces
    console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`);
  }
}
