import { Component } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  currentRecipe!: Recipe;

  onRecipeSelectedChange(recipe: Recipe){
    this.currentRecipe = recipe;
  }
}
