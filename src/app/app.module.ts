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
import {TypicodeModule} from "./modules/typicode/typicode.module";
import {EventosModule} from "./modules/eventos/eventos.module";
import {FormulariosModule} from "./modules/formularios/formularios.module";
import {ReactivosModule} from "./modules/reactivos/reactivos.module";
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NosotrosComponent
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
    ReactivosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
