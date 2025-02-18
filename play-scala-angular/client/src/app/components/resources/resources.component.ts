import {Component, Input} from '@angular/core';
import {Category} from "../categories/categories.component";

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent {
  private medias: any[] = [
    {sp: 4, cat: Category.Series, name: "Games of Throne"},
    {sp: 1, cat: Category.Series, name: "Breaking Bad"},
    {sp: 1, cat: Category.Series, name: "Squid Game"},
    {sp: 4, cat: Category.Series, name: "Friends"},
    {sp: 2, cat: Category.Series, name: "Two Men and a Half"},
    {sp: 2, cat: Category.Series, name: "Two Broke Girl"},
    {sp: 3, cat: Category.Series, name: "The Bear"},
    {sp: 2, cat: Category.Films, name: "Jurassic Park"},
    {sp: 3, cat: Category.Films, name: "Iron Man"},
    {sp: 3, cat: Category.Films, name: "Avengers Infinity War"},
    {sp: 3, cat: Category.Films, name: "Avengers End Game"},
    {sp: 4, cat: Category.Films, name: "Dune 1"}
  ];

  public get resources(): any[] {
    return this.medias.filter((re: any) => re.sp == 1 && re.cat == Category.Series);
  }
}
