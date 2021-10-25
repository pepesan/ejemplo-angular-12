import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  public todos: any[] = [];
  public todo: any;

  constructor() { }

  ngOnInit(): void {
    this.todo = { text: ""}
    this.todos=[
      {text:"hacer la compra"},
      {text: "revisar el coche"}
    ];
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
