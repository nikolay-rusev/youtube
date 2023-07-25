import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  onSubmit(data){
    console.log(data)
  }
  color = "green";
  error=false;
  fruits = ['orange','banana','apple'];
  heroes = ['superman','iron man','ant man'];
 hero = 'spider man';
  title = 'youtube';
  // @ts-ignore
  getVal(item){
    console.log(item.target.value);
  }
  // @ts-ignore
  getTextBox(txt) {
  console.log(txt.value)
  }
  // @ts-ignore
  testFunc(a){
    alert(a);
  }
  onChangeColor(){
    this.color='blue'
  }
  onChangeError(){
    this.error=true
  }
}
