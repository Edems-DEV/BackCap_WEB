import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Group } from 'src/app/models/group.model';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'app-form-group-edit',
  templateUrl: './form-group-edit.component.html',
  styleUrls: ['./form-group-edit.component.scss'],
})
export class FormGroupEditComponent {
  @Input()
  public group: Group;

  form: FormGroup;

  public constructor(private fb: FormBuilder, private service: GroupsService) {}

  public ngOnInit(): void {
    this.form = FormGroupComponent.createForm(this.fb, this.group);
  }

  public saveGroup(values: any): void {
    Object.assign(this.group, values);
    this.service.update(this.group).subscribe();
  }
}
