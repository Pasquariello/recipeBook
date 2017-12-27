import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.recipe = this.recipeService.getRecipe(this.id);
          }
        );


  }

  addToShoppingList(){
    this.recipeService.addIngredientsToSPL(this.recipe.ingredients);
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(ingName, ingAmount);
    // this.shoppingListService.addIngredient(newIngredient);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
