import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/classes/recipe';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss']
})
export class ListRecipeComponent implements OnInit, OnDestroy{
  recipeSubscription: Subscription;
  recipes: Recipe[];
  constructor(
    private recipeService: RecipeService,
  ) { 
    this.recipeSubscription = this.recipeService.recipesSubject.subscribe(
      (recipes: any[]) => {
        console.log(recipes)
        this.recipes = recipes;
      }
    );
    
    this.recipeService.getAllRecipes();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }
}
