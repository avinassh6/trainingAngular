import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommomService } from '../commom.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit, AfterViewInit {
  teacherMessage =" ";
  @ViewChild('teacherRef' , { static: false }) teacherElementRef :ElementRef;

  constructor(private cs:CommomService) { }

  ngOnInit(): void {

  }
  teacherMethod(param){
    this.cs.sendMessage(param)
  }
  ngAfterViewInit():void{
    this.teacherElementRef.nativeElement.focus();
  }
}
