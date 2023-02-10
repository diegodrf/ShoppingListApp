import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe?: Recipe;
  editMode = false;
  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.recipe = data['recipe']
        this.editMode = !!this.recipe;
      }
    )
  }


}
