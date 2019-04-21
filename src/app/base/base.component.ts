import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  nextPage = '';

  constructor(public router: Router, public title: string) { }

  ngOnInit() {
  }

  openNextPage(){
    this.openPage(this.nextPage);
  }
  
  openPage(routeName: string) {
    this.router.navigateByUrl(`/${routeName}`);
  }

}
