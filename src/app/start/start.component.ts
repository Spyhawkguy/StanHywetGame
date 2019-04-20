import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  questions = [
    { question: 'Start your business in an abandoned strawboard factory' },
    { question: 'Start you business in a brand new building' },
    { question: 'Start your business in a kiosk' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
