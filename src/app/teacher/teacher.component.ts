import { Component, OnInit } from '@angular/core';
import { CommomService } from '../commom.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherMessage =" ";
  constructor(private cs:CommomService) { }

  ngOnInit(): void {

  }
  teacherMethod(param){
    this.cs.sendMessage(param)
  }
}
