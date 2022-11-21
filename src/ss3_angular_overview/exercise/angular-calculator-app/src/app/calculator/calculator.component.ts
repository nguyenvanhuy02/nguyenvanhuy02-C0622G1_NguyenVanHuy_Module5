import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberOne: number;
  numberTwo: number;
  result: number;
  constructor() { }

  ngOnInit(): void {
  }

  addition() {
    this.result = (this.numberOne + this.numberTwo);
  }

  subtraction() {
    this.result=(this.numberOne-this.numberTwo);
  }

  multiplication() {
    this.result=(this.numberOne*this.numberTwo);
  }

  division() {
    this.result=(this.numberOne/this.numberTwo);
  }
}
