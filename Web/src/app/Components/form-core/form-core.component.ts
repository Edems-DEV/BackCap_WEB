import { Component, ContentChild, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-core',
  templateUrl: './form-core.component.html',
  styleUrls: ['./form-core.component.scss'],
})
export class FormCoreComponent {
  //Title
  @Input() title: string = 'Settings';
  @Input() icon: string | undefined;
  @Input() icon2: string | undefined;
  //Modal
  constructor(private modalService: NgbModal) {}
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
