import {LOCALE_ID, NgModule} from '@angular/core';
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
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { UsaPropiedadesComponent } from './components/usa-propiedades/usa-propiedades.component';
import {MadrehijaModule} from "./modules/madrehija/madrehija.module";
import { DirectivasComponent } from './components/directivas/directivas.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { SignalsComponent } from './components/signals/signals.component';
import { MiPipe } from './pipes/mi-pipe.pipe';
import { MiaDirective } from './directives/mia.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NosotrosComponent,
    PropiedadesComponent,
    UsaPropiedadesComponent,
    DirectivasComponent,
    PipesComponent,
    SignalsComponent,
    MiPipe,
    MiaDirective
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
    ReactivosModule,
    MadrehijaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
