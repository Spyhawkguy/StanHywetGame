import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: '../question/question.component.html',
  styleUrls: ['../question/question.component.scss']
})
export class VehicleComponent extends QuestionComponent {

  constructor(public router: Router) {
    super(router);
    this.title = 'Choose your advertising vehicle';
    this.questions = [
      {
        question: 'Your advertising vehicle is a bike',
        result: 'Only a few people see your logo while you are biking.',
        image: 'assets/bike.jpg'
      },
      {
        question: 'Your advertising vehicle is a blimp',
        result: 'Everyone in town can look up and see your logo.',
        image: 'assets/blimp.jpg'
      },
      {
        question: 'Your advertising vehicle is a car',
        result: 'Everyone crossing the street to work can see your logo.',
        image: 'assets/car.jpg'
      },
    ];

    this.funFact = {
      fact: `Did you know that Goodyear's blimp was the first commercial airship to use hellum.`,
      image: 'assets/blimp.jpg',
      imageDescription: 'Photo of the Goodyear HQ'
    };
    this.nextPage = 'tire';
  }
}
