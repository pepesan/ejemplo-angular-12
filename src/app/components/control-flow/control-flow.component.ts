import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.sass'
})
export class ControlFlowComponent {

  isLoggedIn = false;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  a: number = 2
  b: number = 3

}
