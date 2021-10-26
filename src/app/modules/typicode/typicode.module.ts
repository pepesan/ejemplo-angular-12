import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypicodeListComponent } from './components/typicode-list/typicode-list.component';
import {TypicodeService} from "./services/typicode-service.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    TypicodeListComponent
  ],
  providers: [TypicodeService],
  exports: [
    TypicodeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class TypicodeModule { }
