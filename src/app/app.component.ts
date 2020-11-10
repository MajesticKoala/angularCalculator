import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  equation = " ";

  addNumber(number: string) {
    this.equation = this.equation.toString()+number;
  }

  clear() {
    this.equation = " ";
  }

  calculate() {
    this.equation = eval(this.equation);
  }
}
