import { Component, OnDestroy, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormUserComponent } from './form-user.component';

@Component({
  selector: 'app-modal-container',
  template: '',
})
export class ModalContainerComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;

  constructor(
    private modalService: NgbModal,
    route: ActivatedRoute,
    router: Router
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe((params) => {
      // When router navigates on this component is takes the params and opens up the form-user[modal]
      this.currentDialog = this.modalService.open(FormUserComponent, {
        centered: true,
      });
      this.currentDialog.componentInstance.id = params['id']; //set @input id

      // Go back to home page after the modal is closed
      this.currentDialog.result.then(
        (result) => {
          router.navigateByUrl('/admin/users');
        },
        (reason) => {
          router.navigateByUrl('/admin/users');
        }
      );
    });
  }

  ngOnDestroy() {
    this.destroy.next(''); //0
  }
}
