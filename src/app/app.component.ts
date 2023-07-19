import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = "green1";
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
}
