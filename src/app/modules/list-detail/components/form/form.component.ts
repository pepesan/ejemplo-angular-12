import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListService} from "../../services/list.service";
import {Dato} from "../../classes/dato";
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  selectedStringId: string|null=null;
  selectedId: number = 0;
  dato: Dato = new Dato();
  public profileForm: UntypedFormGroup;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private _router: Router,
    private tfb: FormBuilder) {
    try {
      this.extractId();
    }catch (error){
      console.log("no hay id")
    }
    console.log("selectedID: "+ this.selectedId)

    this.profileForm= this.tfb.group({
      name: [
        this.dato.name,
        [Validators.required,Validators.minLength(4)]
      ]
    });

    // lo marcamos como no tocado
    this.profileForm.markAsUntouched();
    // lo marcamos como prístino
    this.profileForm.markAsPristine();
  }

  private extractId() {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.selectedStringId = this.route.snapshot.paramMap.get('id');
    if (this.selectedStringId) {
      this.selectedId = parseInt(this.selectedStringId);
    } else {
      this.selectedId = 1;
    }
    this.dato = this.listService.getById(this.selectedId);
  }

  volver() {
    // modulo-lista-detalle volver al listado
    this._router.navigate(['modulo-lista-detalle'])
  }


  onSubmit() {
    this.dato.name= this.profileForm.value.name
    console.log("añadiendo dato: " + this.dato.name)
    if (this.selectedId==0){
      // case add
      this.dato.id= this.listService.obtenerMaximoId()+1;
      this.listService.add(this.dato);
    }else {
      // case edit
      console.log("modificando dato: id: "+this.selectedId+": " + this.dato)
      this.dato.id= this.selectedId;
      this.listService.update(this.selectedId, this.dato);
    }
    this.volver()
  }

}
