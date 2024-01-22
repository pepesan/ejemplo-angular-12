import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ListadoPartidosComponent} from "./modules/partidos/components/listado-partidos/listado-partidos.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UsaPropiedadesComponent} from "./components/usa-propiedades/usa-propiedades.component";
import {MadreComponent} from "./modules/madrehija/madre/madre.component";
import {MainFormComponent} from "./modules/formularios/components/main-form/main-form.component";
import {PrincipalEventosComponent} from "./modules/eventos/components/principal-eventos/principal-eventos.component";
import {DirectivasComponent} from "./components/directivas/directivas.component";
import {PipesComponent} from "./components/pipes/pipes.component";
import {SignalsComponent} from "./components/signals/signals.component";
import {TodosComponent} from "./components/todos/todos.component";
import {
  FormBuilderBasicoComponent
} from "./modules/reactivos/components/form-builder-basico/form-builder-basico.component";
import {EjerciciosComponent} from "./components/ejercicios/ejercicios.component";
import {ReactivosComponent} from "./components/reactivos/reactivos.component";
import {ListComponent} from "./components/list/list.component";
import {DetailComponent} from "./components/detail/detail.component";
import {ControlFlowComponent} from "./components/control-flow/control-flow.component";
import {DeferComponent} from "./components/defer/defer.component";
import {TodosCompletoComponent} from "./components/todos-completo/todos.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'listado', component: ListadoPartidosComponent },
  { path: 'propiedades', component: UsaPropiedadesComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: TodosComponent },
  { path: 'todos', component: TodosCompletoComponent },
  { path: 'eventos', component: PrincipalEventosComponent },
  { path: 'madre', component: MadreComponent },
  { path: 'form', component: MainFormComponent },
  { path: 'formreactivo', component: ReactivosComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: 'listadodetalle', component: ListComponent },
  { path: 'detalle/:id', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'subrutas', loadChildren:
      () => import('./modules/subrutas/subrutas.module')
        .then(m => m.SubrutasModule) },
  { path: 'otrasrutas', loadChildren:
      () => import('./modules/otrasrutas/otrasrutas.module')
        .then(m => m.OtrasrutasModule) },
  { path: 'modulo-lista-detalle', loadChildren:
      () => import('./modules/list-detail/list-detail.module')
        .then(m => m.ListDetailModule) },
  { path: 'submodulo', loadChildren:
      () => import('./modules/submodulo/submodulo.module')
        .then(m => m.SubmoduloModule) },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
