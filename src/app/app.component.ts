import { Component } from '@angular/core';
// import { UserService } from './user.service';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'anil';
  str = 'Hello, how are you doing?';
  dob = new Date(1993, 1, 1);
  data: any;
  constructor(private postData: PostsService) {}

  ngOnInit() {
    this.postData.getPosts().subscribe((result) => {
      console.log('result', result);
      this.data = result;
    });
  }

  // comment out: make simple service
  // constructor(private userData: UserService) {}
  // ngOnInit() {
  //   this.userData.getData();
  // }
  //
  // callService() {
  //   this.userData.getData();
  // }
}
