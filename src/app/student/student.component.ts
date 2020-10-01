import { Component, OnInit } from '@angular/core';
import { CommomService } from '../commom.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
user:string;

constructor(private cs:CommomService) { }
  ngOnInit(): void {
    this.cs.castUser.subscribe(user => this.user = user);
  }

}
