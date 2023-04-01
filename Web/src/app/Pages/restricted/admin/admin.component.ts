import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    public titleService: Title,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(
          this.router.routerState,
          this.router.routerState.root
        ).join('-');
        this.titleService.setTitle(title);
      }
    });
  }

  getTitle(state: any, parent: any): string[] {
    const data: string[] = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    const currentUrl = this.activatedRoute.snapshot.url.join('/');
    data.push(currentUrl);
    return data;
  }

  getTitle2(): string {
    let title: string = this.router.url; //=> /admin/dashboard
    title = title.substring(title.lastIndexOf('/') + 1); //=> dashboard    (last part of url)
    title = title.charAt(0).toUpperCase() + title.slice(1); //=> Dashboard (first letter uppercase)

    return title;
  }
}
