import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import {CommonModule} from "./modules/common/common.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrincipalModule} from "./modules/principal/principal.module";
import {TodosModule} from "./modules/todos/todos.module";
import {PartidosModule} from "./modules/partidos/partidos.module";
import {TypicodeModule} from "./modules/typicode/typicode.module";
import {EventosModule} from "./modules/eventos/eventos.module";
import {FormulariosModule} from "./modules/formularios/formularios.module";
import {ReactivosModule} from "./modules/reactivos/reactivos.module";

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
    PartidosModule,
    TypicodeModule,
    EventosModule,
    FormulariosModule,
    ReactiveFormsModule,
    ReactivosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
