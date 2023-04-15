import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ListadoPartidosComponent} from "./modules/partidos/components/listado-partidos/listado-partidos.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PropiedadesComponent} from "./components/propiedades/propiedades.component";
import {UsaPropiedadesComponent} from "./components/usa-propiedades/usa-propiedades.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listado', component: ListadoPartidosComponent },
  { path: 'propiedades', component: UsaPropiedadesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'subrutas', loadChildren:
      () => import('./modules/subrutas/subrutas.module').then(m => m.SubrutasModule) },
  { path: 'submodulo', loadChildren:
      () => import('./modules/submodulo/submodulo.module').then(m => m.SubmoduloModule) },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
