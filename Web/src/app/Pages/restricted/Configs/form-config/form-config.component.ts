import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.scss'],
})
export class FormConfigComponent {
  constructor(private modalService: NgbModal) {}
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
