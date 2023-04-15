import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//------------------------------------------------------
import { Config } from 'src/app/models/config.model';
import { ConfigsService } from 'src/app/services/configs/configs.service';
import { FormConfigComponent } from '../form-config/form-config.component';

@Component({
  selector: 'app-form-config-edit',
  templateUrl: './form-config-edit.component.html',
  styleUrls: ['./form-config-edit.component.scss'],
})
export class FormConfigEditComponent {
  @Input()
  public config: Config;

  form: FormGroup;

  public constructor(
    private fb: FormBuilder,
    private service: ConfigsService
  ) {}

  public ngOnInit(): void {
    this.form = FormConfigComponent.createForm(this.fb, this.config);
  }

  public saveConfig(values: any): void {
    Object.assign(this.config, values);
    this.service.update(this.config).subscribe();
  }
}
