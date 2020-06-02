import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('recipe 1', 'this is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('recipe 2', 'this is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('recipe 3', 'this is a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),

  ];
  // typeScript define the type after the property with colon
  constructor() { }

  ngOnInit() {
  }

}
