import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient('Apple', 5),
      new Ingredient('Tomato', 10)
    ];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
