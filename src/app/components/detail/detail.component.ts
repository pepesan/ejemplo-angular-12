import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {

  selectedId: string |null = '';
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.selectedId = this.route.snapshot.paramMap.get('id');
  }

}
