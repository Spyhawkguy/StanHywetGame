import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: '../question/question.component.html',
  styleUrls: ['../question/question.component.scss']
})
export class EmployeesComponent extends QuestionComponent {

  constructor(public router: Router) {
    super(router);
    this.title = 'Now it is time to hire some employees';
    this.questions = [
      {
        question: 'Hire hard working employees',
        result: 'Since you hired hard working employees you have made 1,200 sets of tires for the Henry Ford model T.',
        image: 'assets/1200.jpg'
      },
      {
        question: 'Hire regular working employees',
        result: 'Since you hired regular working employees you made 400 sets of tires for the Henry Ford model T.',
        image: 'assets/400.png'
      },
      {
        question: 'Hire lazy employees',
        result: 'Since you hired lazy employees they only made 50 sets of tires for the Henry Ford model T.',
        image: 'assets/50.jpg'
      },
    ];

    this.funFact = {
      fact: 'Did you know that Goodyear made 1,200 sets of tires for the Henry Ford model T. That is 4800 tires!',
      image: 'assets/1200.jpg',
      imageDescription: 'Photo of the Goodyear HQ'
    };
    this.nextPage = 'vehicle';
  }
}
