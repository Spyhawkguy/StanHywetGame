import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-start',
  templateUrl: '../question/question.component.html',
  styleUrls: ['../question/question.component.scss']
})
export class StartComponent extends QuestionComponent {

  constructor(router: Router) {
    super(router);
    this.title = 'Choose where you would like to start your business';
    this.questions = [
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

    this.funFact = {
      fact: 'Did you know that Goodyear started in a abandoned strawboard factory.',
      image: 'assets/factory.png',
      imageDescription: 'Photo of the Goodyear HQ'
    };

    this.nextPage = 'logo';

  }

}

