//import des éléments dont on va avoir besoin dans notre fichier
import { Component } from '@angular/core';

//On utilise l'importation sous la forme d'un décorateur, ça va
// permettre de construire un composant web avec angular.
//Selector permet de donner un nom à notre composant, pour l'identifier par la suite.
//Dans le Html, c'est la balise app-root qui sera insérée
//Avec angular, on peut définir nos propres éléments html personnalisés.
//Le template permet de definir le code html associé à ce template.
//Il affiche la propriété title de l'AppComponent qu'angular va pousser ds le template
@Component({
  selector: 'app-root',
  template: `<h1> Welcome to {{title}}!</h1>`
})
export class AppComponent {
  title = 'ng-pokemon-app';
}
