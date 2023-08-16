import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userData: UserService) {}
  ngOnInit() {
    this.userData.getData();
  }

  callService(){
    this.userData.getData();
  }
}
