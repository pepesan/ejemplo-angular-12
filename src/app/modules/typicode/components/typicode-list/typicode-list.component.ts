import { Component, OnInit } from '@angular/core';
import {TypicodeService} from "../../services/typicode-service.service";
import {Observable} from "rxjs";
import { EMPTY } from "rxjs";
import {TypicodePost} from "../../models/typicode-post";

@Component({
  selector: 'app-typicode-list',
  templateUrl: './typicode-list.component.html',
  styleUrls: ['./typicode-list.component.sass']
})
export class TypicodeListComponent implements OnInit {

  public listadoObservable: Observable<TypicodePost[]> = EMPTY;
  public listadoVisible: TypicodePost[] = [];
  constructor(private typicodeService: TypicodeService) {

  }

  ngOnInit(): void {
    this.listadoObservable = this.typicodeService.getPosts();
    this.listadoObservable.subscribe((data: TypicodePost[]) => {
      console.log(data);
      console.log(data.length);

      data.forEach( (value : TypicodePost) =>
        this.listadoVisible.push(value)
      );

      console.log(this.listadoVisible);
    });
  }

}
