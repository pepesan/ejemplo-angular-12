import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosComponent} from "./components/todos/todos.component";
import {TodoService} from "./services/todo/todo.service";
import {FormsModule} from "@angular/forms";
import {PrincipalModule} from "../principal/principal.module";



@NgModule({
  declarations: [TodosComponent],
  providers:[TodoService],
  imports: [
    CommonModule,
    FormsModule,
    PrincipalModule
  ],
  exports:[TodosComponent]
})
export class TodosModule { }
