import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = ' Calculator Application';
  num1: number;
    num2: number;
    result: number;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
  this.result = this.num1 + this.num2;
  }
  substract(){
    this.result = this.num1 - this.num2;
  }
  multiply(){
    this.result = this.num1 * this.num2;
  }
  divide(){
    this.result = this.num1 / this.num2;
  }

}
