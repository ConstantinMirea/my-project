import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

// @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
// @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;


// @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }


//   onAddItem(){
//  const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
//  this.shoppingListService.addIngredients(newIngredient);


//  this.ingredientAdded.emit(newIngredient);
//  console.log(newIngredient)
  // }

  onAddItem(form:NgForm){
     const value= form.value
     const newIngredient = new Ingredient(value.name, value.amount);
 this.shoppingListService.addIngredients(newIngredient);

  }

}
