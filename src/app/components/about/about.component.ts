import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  volver() {
    this._router.navigate(['home'])
  }
}
