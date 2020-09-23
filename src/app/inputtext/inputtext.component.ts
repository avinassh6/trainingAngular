import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {
  public name = "";
  public nameValue ="";
  constructor() { }

  ngOnInit(): void {
  }

  nameDisplay(){
    console.log(this.name);
    this.nameValue = this.name;
  }

  textOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122 )) {
      return false;
    }
    return true;

  }
}
