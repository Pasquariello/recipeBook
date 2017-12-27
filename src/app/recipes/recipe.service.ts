import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
    new Recipe('Shnitzel',
    'This is simply a test',
    'http://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-3-landscape.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Fries', 20)
    ]),
    new Recipe('Meatloaf',
    'Test ya fool',
    'https://assets.epicurious.com/photos/57eab27ecf9338f824b78b4b/master/pass/old-fashioned-meat-loaf.jpg',
    [
      new Ingredient('Broccoli heads', 2),
      new Ingredient('Meat', 1),
      new Ingredient('Cauliflower', 1)
    ])
  ];

constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToSPL(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }


}
