import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
    this.title = 'Thank you for playing!';
  }

  ngOnInit() {
  }

}
