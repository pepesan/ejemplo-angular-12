import { Component } from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent {

  public dato: Todo;

  constructor(private todoService: TodoService) {
    this.dato  = this.todoService.dato;
  }

}
