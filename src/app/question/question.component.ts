import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent extends BaseComponent implements OnInit {
  mode = 'question';
  questions = [];
  funFact = {
    fact: '',
    image: '',
    imageDescription: ''
  };
  selectedQuestion = {
    question: 'fake value',
    result: 'fake result'
  };

  constructor(router: Router, title: string) {
    super(router, title);
  }

  ngOnInit() {
  }

  selectQuestion(item: any) {
    this.selectedQuestion = item;
    this.setMode('result');
  }

  setMode(mode: string) {
    this.mode = mode;
  }
}
