import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Config } from 'src/app/models/config.model';
import { ConfigsService } from 'src/app/services/configs/configs.service';
import { FormConfigComponent } from '../form-config/form-config.component';

import {
  MachineName,
  GroupName,
  Source,
  Destination,
} from 'src/app/models/names.model';

@Component({
  selector: 'app-form-config-create',
  templateUrl: './form-config-create.component.html',
  styleUrls: ['./form-config-create.component.scss'],
})
export class FormConfigCreateComponent {
  form: FormGroup;

  config: Config;

  public constructor(
    private fb: FormBuilder,
    private service: ConfigsService
  ) {}

  public ngOnInit(): void {
    this.form = FormConfigComponent.createForm(
      this.fb,
      new Config()
      // 0,
      // '',
      // '',
      // '',
      // false,
      // 0,
      // 0,
      // '',
      // new Date(),
      // new Date(),
      // new Array<Source>(),
      // new Array<Destination>(),
      // new MachineName(0, ''),
      // new GroupName(0, '')
    );
  }

  public saveConfig(values: any): void {
    this.service.insert(values).subscribe();
  }
}
