import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amountInputRef?: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }
  add(){
    const item = new Ingredient(
      (<HTMLInputElement>this.nameInputRef?.nativeElement).value,
      parseInt((<HTMLInputElement>this.amountInputRef?.nativeElement).value)
    );
    this.shoppingListService.addIngredient(item);
    this.clear();
  }

  // remove(){
  //   let item = new Ingredient(name.value, parseInt(amount.value))
  //   this.removeItemEvent.emit(item);
  // }

  clear(){
    (<HTMLInputElement>this.nameInputRef?.nativeElement).value = '';
    (<HTMLInputElement>this.amountInputRef?.nativeElement).value = '';
  }
}
