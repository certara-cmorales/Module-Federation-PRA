import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import { CategoriesComponent } from './components/categories/categories.component';
import {CommonModule} from "@angular/common";
import { ResourcesComponent } from './components/resources/resources.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector });
    customElements.define('angular-app-component', element);
  }
}
