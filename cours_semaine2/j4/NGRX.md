# NGRX : Gestionnaire d'état pour Angular

Basé sur **Redux**, NgRx est une bibliothèque robuste et bien adaptée pour gérer des applications complexes et de grande envergure. Il suit le principe d'architecture Flux et utilise le paradigme de programmation réactive en tirant parti de **RxJS**.

## Prérequis 

Assurez-vous d'avoir installé **Node.js** et **npm** (le gestionnaire de paquets Node.js) sur votre système. Vous aurez également besoin du **CLI Angular** pour créer et gérer votre application Angular. Pour l'installer, exécutez cette commande dans votre terminal :

```javascript
npm install -g @angular/cli`
```

## Création d'une nouvelle application Angular

Nous allons partir d'une nouvelle application simple et intégrer NGRX au projet.

Créez une nouvelle application Angular en utilisant le CLI Angular :

```javascript
ng new pokedex-app
cd pokedex-app
```

## Installation de NGXS

Installez les packages nécessaires pour utiliser NGXS dans votre application :

```javascript
npm install @ngxs/store @ngxs/logger-plugin @ngxs/devtools-plugin
```

## Configuration de NGXS

### Importation des modules 
Ouvrez le fichier `src/app/app.module.ts` et ajoutez les importations nécessaires :

```javascript
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
```

Mettez à jour le tableau d'importations dans `@NgModule` :

```javascript
@NgModule({
// ...
imports: [
// ...
NgxsModule.forRoot([], { developmentMode: !environment.production }),
NgxsLoggerPluginModule.forRoot(),
NgxsReduxDevtoolsPluginModule.forRoot(),
],
// ...
})
export class AppModule { }
```
### Mise en place d'un fichier d'environnement

Création des fichiers de variables d'environnement pour les modes production ou développement. 

```javascript
ng generate environments
```

```javascript
export const environment = {
    production: false,
};
```
3. Toujours dans le dossier `src/environments`, créez un fichier `environment.prod.ts` avec le contenu suivant :
```javascript
export const environment = {
production: true,
};
```
4. Ouvrez le fichier src/app/app.module.ts et ajoutez l'importation suivante en haut du fichier :
```javascript
   import { environment } from '../environments/environment';
```
5. Maintenant, vous devriez être en mesure d'utiliser environment dans `src/app/app.module.ts` comme ceci :
```javascript
NgxsModule.forRoot([], { developmentMode: !environment.production }), 
```
6. Enfin, mettez à jour le fichier `angular.json` pour utiliser les fichiers d'environnement appropriés lors de la construction de l'application. Dans la section projects.`YOUR_PROJECT_NAME.architect.build.configurations`, ajoutez la configuration `production` :

```json
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ],
    // ...
  }
}
```

Assurez-vous de remplacer `YOUR_PROJECT_NAME` par le nom de votre projet.

Après avoir effectué ces étapes, votre application Angular devrait être configurée pour utiliser les fichiers d'environnement pour gérer les variables d'environnement de développement et de production.

## Créer un modèle de données Pokemon

Créez un fichier `src/app/pokemon.model.ts` :

```javascript
export interface Pokemon {
id: number;
name: string;
type: string;
}
```

## Création du store NGXS

Créez un fichier `src/app/pokemon.state.ts` :

On peut créer une base avec la commande :

`ng generate class PokemonState --type=state`


```typescript
import { State, Action, StateContext } from '@ngxs/store';
import { Pokemon } from './pokemon.model';

// Actions
export class AddPokemon {
    static readonly type = '[Pokemon] Add';
    constructor(public payload: Pokemon) {}
}

export class RemovePokemon {
    static readonly type = '[Pokemon] Remove';
    constructor(public payload: number) {}
}

// State
@State<Pokemon[]>({
    name: 'pokemons',
    defaults: [],
})
export class PokemonState {
    @Action(AddPokemon)
    addPokemon(ctx: StateContext<Pokemon[]>, action: AddPokemon) {
        const state = ctx.getState();
        ctx.setState([...state, action.payload]);
    }

    @Action(RemovePokemon)
    removePokemon(ctx: StateContext<Pokemon[]>, action: RemovePokemon) {
        ctx.setState(ctx.getState().filter((p) => p.id !== action.payload));
    }
}
```

Ajoutez `PokemonState` au tableau `forRoot` de NgxsModule dans `src/app/app.module.ts` :

```typescript
import { PokemonState } from './pokemon.state';

@NgModule({
    // ...
    imports: [
    // ...
        NgxsModule.forRoot([PokemonState], { developmentMode: !environment.production }),
    // ...
    ],
    // ...
})
export class AppModule { }
```

## Utilisation du store NGXS dans les composants

Dans le fichier `src/app/app.component.ts`, injectez le `Store` de NGXS et créez des méthodes pour ajouter et supprimer des Pokémon :

```typescript
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddPokemon, RemovePokemon } from './pokemon.state';
import { Pokemon } from './pokemon.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
pokemons$ = this.store.select(state => state.pokemons);

    constructor(private store: Store) {}

    addPokemon(name: string, type: string) {
        const newPokemon: Pokemon = {
            id: Date.now(),
            name,
            type,
        };
        this.store.dispatch(new AddPokemon(newPokemon));
    }

    removePokemon(id: number) {
        this.store.dispatch(new RemovePokemon(id));
    }
}
```

Dans le fichier `src/app/app.component.html`, créez un formulaire pour ajouter des Pokémon et affichez la liste des Pokémon :

```typescript
<div>
  <h2>Ajouter un Pokémon</h2>
  <label>
    Nom:
    <input #nameInput type="text" />
  </label>
  <label>
    Type:
    <input #typeInput type="text" />
  </label>
  <button (click)="addPokemon(nameInput.value, typeInput.value)">Ajouter</button>
</div>

<h2>Liste des Pokémon</h2>
<ul>
  <li *ngFor="let pokemon of pokemons$ | async">
    {{ pokemon.name }} ({{ pokemon.type }})
    <button (click)="removePokemon(pokemon.id)">Supprimer</button>
  </li>
</ul>
```

Avec cette configuration, vous avez créé un Pokédex simple à l'aide d'Angular et de NGXS pour gérer l'état de l'application. Vous pouvez ajouter et supprimer des Pokémon, et la liste des Pokémon est automatiquement mise à jour en fonction des actions de l'utilisateur.

Cet exemple est très basique, mais il montre comment utiliser NGXS pour gérer l'état de l'application. Vous pouvez étendre cet exemple pour inclure des fonctionnalités supplémentaires, telles que la récupération de données à partir d'une API, la gestion des erreurs, etc.