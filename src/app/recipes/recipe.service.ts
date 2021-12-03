import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('A test recipe', 'this is a test', 'https://www.simplyrecipes.com/thmb/JM-orIwOXTKXsUodT8gToU06w40=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg',
    [new Ingredient('Meat',1), new Ingredient('french fries', 100)]),
    new Recipe('A test recipe vol 2', 'this is a test vol 2', 'https://www.simplyrecipes.com/thmb/JM-orIwOXTKXsUodT8gToU06w40=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg',
    [new Ingredient('Meat',1), new Ingredient('french fries', 10)]),
    new Recipe('A test recipe vol 3', 'this is a test vol 3', 'https://www.simplyrecipes.com/thmb/JM-orIwOXTKXsUodT8gToU06w40=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg',
    [new Ingredient('Meat',1), new Ingredient('french fries', 18)])
  ];

getRecipes(){
return this.recipes.slice(); //slice() method is added so a COPY of the recipes array is returned.
}
constructor(private shoppingListService: ShoppingListService) { }


// addIngredientsToShoppingList(ingredients:Ingredient[]){
// this.shoppingListService.addRecIngredients(ingredients);
// }
}
