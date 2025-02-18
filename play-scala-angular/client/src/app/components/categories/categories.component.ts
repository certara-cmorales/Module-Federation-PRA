import { Component } from '@angular/core';

export enum Category {
  Series = "Series",
  Films = "Films",
  Documentaries = "Documentaries",
  Sports = "Sports"
}

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent {
  private categories: any = {
    1: [Category.Series, Category.Films, Category.Documentaries, Category.Sports],
    2: [Category.Series, Category.Films, Category.Sports],
    3: [Category.Series, Category.Films, Category.Documentaries],
    4: [Category.Series, Category.Films]
  };


  public getCategory(sp_id: number): any[] {
    return this.categories[sp_id]
  }
}
