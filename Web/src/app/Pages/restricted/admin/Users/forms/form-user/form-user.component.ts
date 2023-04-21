import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, User_PSW } from 'src/app/models/user.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent {
  @Input() title: string = 'Create';

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, user: User_PSW): FormGroup {
    return fb.group({
      name: [user.name, [Validators.required]],
      email: [user.email, [Validators.required, Validators.email]],
      interval_Report: user.interval_Report,
      password: user.password,
      // password2: user.password,
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
    this.modalService.dismissAll(); //close(); //doenst work IDK why
    //error is not from here
  }

  public close(): void {
    this.modalService.dismissAll();
  }

  constructor(private modalService: NgbModal) {}
}
