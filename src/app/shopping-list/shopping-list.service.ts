import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomoes", 95)
  ];

  ingrediensChanged = new EventEmitter<Ingredient[]>();

  addIngredients(newIngredient: Ingredient) {

    const foundIngredient = this.ingredients.find(ingredient => ingredient.name === newIngredient.name)

    if (foundIngredient) {
      foundIngredient.amount += newIngredient.amount;
    } else { this.ingredients.push(newIngredient) }


    this.ingrediensChanged.emit(this.ingredients.slice());
  }





  getIngredients() {
    return this.ingredients.slice() //this creates a new array
  }

  addRecIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingrediensChanged.emit(this.ingredients.slice());
  }

  // this methord only works for primitivies... for objects it fails.
  //   checkForDuplicates(){
  //  return this.ingredients.filter((value, index)=>this.ingredients.indexOf(value)===index);
  //   }
}
