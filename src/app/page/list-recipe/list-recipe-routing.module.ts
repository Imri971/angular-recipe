import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecipeComponent } from './list-recipe.component';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';

const routes: Routes = [
  { path: '', component: ListRecipeComponent },
  { path: 'new', component: CreateRecipeComponent },
  { path: ':id', component: ViewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRecipeRoutingModule { }
