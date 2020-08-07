import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/classes/recipe';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  currentRecipeSubscription: Subscription;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute) {
    //2 méthodes :
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   if (params.id){
    //     this.id = params.id;
    //   }
    // });

    // Ou de manière plus simple :
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.currentRecipeSubscription = this.recipeService.currentRecipeSubject.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
        console.log(this.recipe)
      }
    );




    this.recipeService.getRecipeById(this.id);
  }

  onAllumer() {
    this.recipeService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos recipes ?')) {
      this.recipeService.switchOffAll();
    } else {
      return null;
    }
  }

  counterRating(i: number) {
    return new Array(i);
  }
  restCounterRating(i: number) {
    return new Array(5 - i);
  }
  ngOnDestroy() {
    this.currentRecipeSubscription.unsubscribe();
  }
}
