import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeChangeEvent = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipes = [];
  }


  onSelectRecipe(recipe: Recipe) {
    this.recipeChangeEvent.emit(recipe);
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
