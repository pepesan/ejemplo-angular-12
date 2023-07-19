import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo/todo.service"
import {Dato} from "../../domain/dato";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  public todos: Dato[] = [];
  public todo: Dato;
  public dato: Dato = new Dato("");

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todo = new Dato();
    this.todos=[
      new Dato("hacer la compra"),
      new Dato("revisar el coche")
    ];
    this.dato = this.todoService.cogeDatos();
    console.log(this.dato);
  }

  addTodo() {
    let mitodo: Dato=new Dato(this.todo.text);
    this.todos.push(mitodo);
    this.todo.text = "";
  }

  deleteTodo(text: string) {
    for(let i=0; i<this.todos.length; i++){
      const todo = this.todos[i];
      if(todo.text==text){
        this.todos.splice(i,1);
      }
    }
  }
}
