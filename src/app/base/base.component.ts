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
  title = 'title';
  mode = null;
  selectedQuestion = {
    question: 'fake value',
    result: 'fake result'
  };

  constructor(public router: Router, startMode: string, title: string) {
    this.title = title;
    this.mode = startMode;
  }

  ngOnInit() {
  }

  openPage(routeName: string) {
    this.router.navigateByUrl(`/${routeName}`);
  }
  selectQuestion(item: any) {
    this.selectedQuestion = item;
    this.setMode('result');
  }
  setMode(mode: string) {
    this.mode = mode;
  }

}
