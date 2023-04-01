import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(public router: Router) {}

  getTitle2(): string {
    let title: string = this.router.url; //=> /admin/dashboard
    title = title.substring(title.lastIndexOf('/') + 1); //=> dashboard    (last part of url)
    title = title.charAt(0).toUpperCase() + title.slice(1); //=> Dashboard (first letter uppercase)

    return title;
  }
}
