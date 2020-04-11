import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;
  constructor() { }

  ngOnInit(): void {
  }
  public getDecimal(){
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }
  public getNumber(v: string){
    if (this.waitForSecondNumber){
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
  }
  public getOperation(op: string){
    if (this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);
    }
    else if (this.operator){
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }
  public doCalculation(op, secondOp){
    switch (op) {
      case '+' :
        return this.firstOperand += secondOp;
        case '-' :
        return this.firstOperand -= secondOp;
        case '*' :
        return this.firstOperand *= secondOp;
        case '/' :
        return this.firstOperand /= secondOp;
        case '=' :
          return  secondOp;
    }
  }
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

}
