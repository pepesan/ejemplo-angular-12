import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo/todo.service"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  public todos: any[] = [];
  public todo: any;
  public dato: any = {};

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todo = { text: ""}
    this.todos=[
      {text:"hacer la compra"},
      {text: "revisar el coche"}
    ];
    this.dato = this.todoService.cogeDatos();
    console.log(this.dato);
  }

  addTodo() {
    let mitodo={text:this.todo.text};
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
