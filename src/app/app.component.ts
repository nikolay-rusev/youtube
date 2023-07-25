import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = {
    left: true,
    middle: false,
    right: false,
  };
  parentFunction(data: any) {
    console.warn(data);
  }

  onSubmit(data: any) {
    console.log(data);
  }
  color = 'green';
  error = false;
  fruits = ['orange', 'banana', 'apple'];
  heroes = ['superman', 'iron man', 'ant man'];
  hero = 'spider man';
  title = 'youtube';

  // @ts-ignore
  getVal(item) {
    console.log(item.target.value);
  }

  getTextBox(txt: { value: any }) {
    console.log(txt.value);
  }

  testFunc(a: any) {
    alert(a);
  }
  onChangeColor() {
    this.color = 'blue';
  }
  onChangeError() {
    this.error = true;
  }
}
