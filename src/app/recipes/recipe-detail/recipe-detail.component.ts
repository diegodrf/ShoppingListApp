import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  addIngredientsToShoppingList(){
    this.recipe.ingredients.forEach(i => {
      this.shoppingListService.addIngredient(i);
    })
  }
}
