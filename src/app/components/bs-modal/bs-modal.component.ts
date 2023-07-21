import { Component } from '@angular/core';

@Component({
  selector: 'app-bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.sass']
})
export class BsModalComponent {

  modalVisible = false;

  openModal() {
    console.log("opening modal")
    this.modalVisible = true;
  }

  closeModal() {
    console.log("closing modal")
    this.modalVisible = false;
  }

}
