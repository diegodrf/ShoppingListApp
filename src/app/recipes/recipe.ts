import {Ingredient} from "../shared/ingredient.model";

export class Recipe {
  private static staticId = 0;
  public id: number;
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {
    this.id = ++Recipe.staticId;
  }
}
