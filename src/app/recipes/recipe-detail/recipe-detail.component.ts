import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute, Data} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe!: Recipe;
  recipeSubscription!: Subscription;
  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.recipeSubscription = this.route.data.subscribe(
      (data: Data) => {
        this.recipe = data['recipe']
      }
    )
  }

  addIngredientsToShoppingList(){
    this.recipe.ingredients.forEach(i => {
      this.shoppingListService.addIngredient(i);
    })
  }

  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }
}
