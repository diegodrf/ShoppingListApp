import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];
  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    let i = this.ingredients.find( i => i.name.toLowerCase() === ingredient.name.toLowerCase());

    if(i) {
      let index = this.ingredients.indexOf(i);
      this.ingredients[index].amount += i.amount;
    } else {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChanged.emit(this.getIngredients());
  }
}
