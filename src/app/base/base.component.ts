import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: ``,
  styles: []
})
export class BaseComponent {

  nextPage = '';
  title = '';

  constructor(public router: Router) { }

  openNextPage() {
    this.openPage(this.nextPage);
  }

  openPage(routeName: string) {
    this.router.navigateByUrl(`/${routeName}`);
  }

}
