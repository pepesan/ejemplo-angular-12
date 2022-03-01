import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmoduloComponent } from './submodulo.component';

const routes: Routes = [{ path: '', component: SubmoduloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmoduloRoutingModule { }
