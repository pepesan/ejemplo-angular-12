import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadreComponent } from './madre/madre.component';
import { HijaComponent } from './hija/hija.component';



@NgModule({
  declarations: [
    MadreComponent,
    HijaComponent
  ],
  exports:[
    MadreComponent,
    HijaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MadrehijaModule { }
