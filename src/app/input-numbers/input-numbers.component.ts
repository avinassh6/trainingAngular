import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-numbers',
  templateUrl: './input-numbers.component.html',
  styleUrls: ['./input-numbers.component.css']
})
export class InputNumbersComponent implements OnInit {
  public numbers = "";
  public numberVal = "";
  constructor() { }

  ngOnInit(): void {
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  numberDisplay(){
    this.numberVal = this.numbers;
  }

}
