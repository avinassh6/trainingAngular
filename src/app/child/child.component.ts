import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentvalue;
@Output()  childMessage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  passData(){
    this.childMessage.emit("this is child message");
  }
}
