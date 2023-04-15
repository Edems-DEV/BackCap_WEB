import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Config } from 'src/app/models/config.model';
import { ConfigsService } from 'src/app/services/configs/configs.service';
import { FormConfigComponent } from '../form-config/form-config.component';

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

  // public ngOnInit(): void {
  //   this.form = FormConfigComponent.createForm(
  //     this.fb,
  //     new Config(0, 0, 0, 0, true, '', '', [''], [''])
  //   );
  // }

  public saveConfig(values: any): void {
    this.service.insert(values).subscribe();
  }
}
