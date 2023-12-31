import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  id = null;
  constructor(private router:ActivatedRoute) {
  }
  ngOnInit(){
      let params = this.router.snapshot.params;
      console.log(params);
      this.id = params['id'];
  }
}
