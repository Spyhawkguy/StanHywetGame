import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
    this.nextPage = 'start';
    this.title = 'Stan Hywet Choose your Company';
  }

  ngOnInit() {
  }

}
