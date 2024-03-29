import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListService} from "../../services/list.service";
import {Dato} from "../../classes/dato";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {
  selectedStringId: string|null=null;
  selectedId: number = 0;
  dato: Dato = new Dato();
  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private _router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.selectedStringId = this.route.snapshot.paramMap.get('id');
    if(this.selectedStringId){
      this.selectedId = parseInt(this.selectedStringId);
    }else {
      this.selectedId = 1;
    }
    this.dato = this.listService.getById(this.selectedId);
  }

  volver() {
    // modulo-lista-detalle volver al listado
    this._router.navigate(['modulo-lista-detalle'])
  }
}
