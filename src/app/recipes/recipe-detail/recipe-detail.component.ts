import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// @Input() recipe:Recipe;
recipe:Recipe;
id:number;

constructor(private shoppingListService: ShoppingListService,
  private route:ActivatedRoute,
  private recipeService: RecipeService,
  private router:Router) { }
// constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{ this.id=+params['id'];
    this.recipe= this.recipeService.getRecipe(this.id)
    });
  }

  addToShoppingList() {
    this.recipe.ingredients.forEach(ingredient => this.shoppingListService.addIngredients(ingredient))
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
      }

      onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})  // i am allready on the id of the route all i need to do is add edit 
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
      }
}
