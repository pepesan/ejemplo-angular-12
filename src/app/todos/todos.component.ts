import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  public todos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {text:"hacer la compra"},
      {text: "revisar el coche"}
    ];
  }

}
