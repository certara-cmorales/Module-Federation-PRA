import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import {CommonModule} from "@angular/common";
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ActionsComponent } from './components/actions/actions.component';
@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    ActionsComponent,
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
