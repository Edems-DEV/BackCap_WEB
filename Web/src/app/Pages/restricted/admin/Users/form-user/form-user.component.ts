import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  @Input() user: User;
  @Input() title: string = 'Create';

  public id: number = 0;
  public name: string = '';
  public email: string = '';
  public interval: string = '';

  ngOnInit(): void {
    this.id = this.user.id;
    this.name = this.user.name;
    this.email = this.user.email;
    this.interval = this.user.interval_Report;
  }
}
