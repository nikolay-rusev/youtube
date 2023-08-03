import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Call API in Angular JS
  postData: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        // console.log(data);
        this.postData = data;
      });
  }

  title = 'youtube';
  color = 'green';
  error = false;
  fruits = ['orange', 'banana', 'apple'];
  hero = 'spider man';
  heroes = ['superman', 'iron man', 'ant man'];
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

  // @ts-ignore
  getVal(item) {
    console.log(item.target.value);
  }

  getTextBoxValue(txt: { value: any }) {
    alert(txt.value);
  }

  showAlert(a: any) {
    alert(a);
  }
  onChangeColor() {
    this.color = 'blue';
  }
  onChangeError() {
    this.error = true;
  }
}
