import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient("Apples", 5),
  //   new Ingredient("Tomoes", 95)
  // ];

  ingredients: Ingredient[]

  //the shopping list service needs to be injected in this component
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingrediensChanged.subscribe((ingredients:Ingredient[]) => { this.ingredients=ingredients})
  }


//   onIngredientAdded(ingredient: Ingredient) {

//     // this.ingredients.push(ingredient)
//     this.shoppingListService.addIngredients(ingredient);
//   }
 }
