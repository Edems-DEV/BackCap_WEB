import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent {
  constructor(private modalService: NgbModal) {}
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
