import { Component } from '@angular/core';
import {Recipe} from "./recipe";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  currentRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {
    recipeService.selectedRecipe.subscribe(
      (data: Recipe) => {
        this.currentRecipe = data;
      }
    )
  }
}
