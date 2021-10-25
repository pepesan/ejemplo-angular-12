import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';
import {CommonModule} from "./common/common.module";
import {FormsModule} from "@angular/forms";
import {PrincipalModule} from "./principal/principal.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
