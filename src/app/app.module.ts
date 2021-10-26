import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import {CommonModule} from "./modules/common/common.module";
import {FormsModule} from "@angular/forms";
import {PrincipalModule} from "./modules/principal/principal.module";
import {TodosModule} from "./modules/todos/todos.module";
import {PartidosModule} from "./modules/partidos/partidos.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PrincipalModule,
    TodosModule,
    PartidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
