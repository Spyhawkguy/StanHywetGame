import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  mode = 'question';
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



  selectedQuestion = {
    question: 'fake value',
    result: 'fake result'
  };

  funFact = {
    fact: 'Did you know that Goodyear started in a abandoned strawboard factory.',
    image: 'assets/factory.png',
    imageDescription: 'Photo of the Goodyear HQ'
  };

  constructor() { }

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

