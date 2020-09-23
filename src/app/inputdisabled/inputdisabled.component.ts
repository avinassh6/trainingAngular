import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdisabled',
  templateUrl: './inputdisabled.component.html',
  styleUrls: ['./inputdisabled.component.css']
})
export class InputdisabledComponent implements OnInit {
  public disabledText = "";
  public disabledInput  = false;
  constructor() { }

  ngOnInit(): void {
  }
  disableMethod(){
    if(this.disabledText){
      this.disabledInput = true;
    }
  }

}
