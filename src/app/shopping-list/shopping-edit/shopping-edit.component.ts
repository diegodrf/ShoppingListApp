import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() newItemEvent = new EventEmitter<Ingredient>();
  @Output() removeItemEvent = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amountInputRef?: ElementRef;
  add(){
    const item = new Ingredient(
      (<HTMLInputElement>this.nameInputRef?.nativeElement).value,
      parseInt((<HTMLInputElement>this.amountInputRef?.nativeElement).value)
    )
    this.newItemEvent.emit(item);
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
