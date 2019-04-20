import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: '../base/base.question.html',
  styleUrls: ['../base/base.component.scss']
})
export class StartComponent extends BaseComponent implements OnInit {

  questions = [
    {
      question: 'Start your business in an abandoned strawboard factory',
      result: 'You have to spend some money to repair the building, and your company is medium sized',
      image: 'assets/factory.png'
    },
    {
      question: 'Start you business in a brand new building',
      result: 'You have all of the latest tech in your own new building, and your company is big',
      image: 'assets/new.jpg'
    },
    {
      question: 'Start your business in a kiosk',
      result: 'Your business is very portable, but your company is very small',
      image: 'assets/kiosk.jpg'
    },
  ];

  funFact = {
    fact: 'Did you know that Goodyear started in a abandoned strawboard factory.',
    image: 'assets/factory.png',
    imageDescription: 'Photo of the Goodyear HQ'
  };

  constructor(public router: Router) {
    super(router, 'question', 'Choose where you would like to start your business');
  }

  ngOnInit() {
  }


}

