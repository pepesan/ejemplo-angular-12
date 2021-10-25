import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import {CommonModule} from "../common/common.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrincipalModule { }
