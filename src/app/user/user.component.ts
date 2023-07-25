import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  @Output() callParentFunction:EventEmitter<any>= new EventEmitter<any>();
  @Input() hero: any;

  ngOnInit(){
    console.warn("hero", this.hero)

  }
  onClick(){
    this.callParentFunction.emit({name: "Nick Rusev"})
  }

}
