import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // reactive angular form
  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userAddress: new FormControl('', [
      Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(10),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    password: new FormControl(''),
  });
  get userEmail() {
    return this.loginForm.get('userEmail');
  }
  get userAddress() {
    return this.loginForm.get('userAddress');
  }
  collectData() {
    console.warn(this.loginForm.value);
  }
  // Toggle element | hide and show
  showMe: boolean = false;
  toggleTag() {
    this.showMe = !this.showMe;
  }
  // Pre filled Form
  userData = {
    email: 'test@test.com',
    address: 'noida',
    mobile: '12332947328974',
  };
  // Call API in Angular JS
  postData: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.postData = data;
      });
  }

  // Call Post API in Angular JS
  onPost(data: any) {
    this.http
      .post('http://localhost:3000/restaurant', data)
      .subscribe((result) => {
        console.log('result', result);
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
