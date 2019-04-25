import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tire',
  templateUrl: '../question/question.component.html',
  styleUrls: ['../question/question.component.scss']
})
export class TireComponent extends QuestionComponent {

  constructor(public router: Router) {
    super(router);
    this.title = 'Now pick what kind of tires you want to make';
    this.questions = [
      {
        question: 'Try to make tires for all types of vehicles',
        result: 'Your tires are loved by everyone! You even make tires for spacecrafts.',
        image: 'assets/space.jpg'
      },
      {
        question: 'You only make car tires',
        result: 'Your tires are very popular to the public. With cars becoming more popular.',
        image: 'assets/tires.jpg'
      },
      {
        question: 'You only make bike tires',
        result: 'Your tires are not as popular as car tires with cars becoming more popular.',
        image: 'assets/biketires.jpg'
      },
    ];

    this.funFact = {
      fact: `Did you know that the first ever tires on the moon were Goodyear's on the spacecraft Apollo 14.`,
      image: 'assets/space.jpg',
      imageDescription: 'Photo of the Goodyear HQ'
    };
    this.nextPage = 'end';
  }
}
