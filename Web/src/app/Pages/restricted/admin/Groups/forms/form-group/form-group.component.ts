import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  @Input() title: string = 'Create';

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, group: Group): FormGroup {
    return fb.group({
      name: [group.name, [Validators.required]],
      //name: [group.description, [Validators.required]],
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }
}
