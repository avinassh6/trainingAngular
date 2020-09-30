import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  //cols: any[];
  childMessage;
  constructor() { }

  ngOnInit(): void {
  }
  cols = [
    {field: 'vin', header: 'Vin'},
    {field: 'year', header: 'Year'},
    {field: 'brand', header: 'Brand'},
    {field: 'color', header: 'Color'}
];

childValue(param){
  this.childMessage = param;
}
}
