import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Group } from 'src/app/models/group.model';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'app-form-group-create',
  templateUrl: './form-group-create.component.html',
  styleUrls: ['./form-group-create.component.scss'],
})
export class FormGroupCreateComponent {
  form: FormGroup;

  group: Group;

  public constructor(private fb: FormBuilder, private service: GroupsService) {}

  // public ngOnInit(): void {
  //   this.form = FormGroupComponent.createForm(this.fb, new Group(0, ''));
  // }

  public saveGroup(values: any): void {
    this.service.insert(values).subscribe();
  }
}
