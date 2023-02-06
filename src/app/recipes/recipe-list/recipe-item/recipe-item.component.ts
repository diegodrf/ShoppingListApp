import {Component, Input} from '@angular/core';
import {Recipe} from "../../recipe";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  onSelectRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
