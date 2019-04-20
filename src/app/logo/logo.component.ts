import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-logo',
  templateUrl: '../base/base.question.html',
  styleUrls: ['../base/base.component.scss']
})
export class LogoComponent extends BaseComponent implements OnInit {
  questions = [
    {
      question: 'Does not trademark their logo',
      result: 'Your logo gets trademarked by a competing tire company.',
      image: 'assets/stolen.png'
    },
    {
      question: 'Trademarks the winged foot of Mercury',
      result: 'Your logo is unique. Anyone can tell what company you are.',
      image: 'assets/goodyear.png'
    },
    {
      question: 'Uses a free to use logo',
      result: 'Your logo can not get trademarked, but lots of other companies use it.',
      image: 'assets/free.png'
    },
  ];

  funFact = {
    fact: 'Did you know that the winged foot of Mercury was trademarked by Goodyear in the year 1901.',
    image: 'assets/goodyear.png',
    imageDescription: 'Photo of the Goodyear HQ'
  };


  constructor(public router: Router) {
    super(router, 'question', 'Choose how to make your logo');
  }
  ngOnInit() {
  }

}
