import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentinterpolationComponent } from './third-componentinterpolation/third-componentinterpolation.component';
import { ForthcomponentselectorComponent } from './forthcomponentselector/forthcomponentselector.component';
import { FifthComponentAttributeComponent } from './fifth-component-attribute/fifth-component-attribute.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { InputNumbersComponent } from './input-numbers/input-numbers.component';
import { InputdisabledComponent } from './inputdisabled/inputdisabled.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CommomService } from './commom.service';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { FirstDirectiveDirective } from './first-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentinterpolationComponent,
    ForthcomponentselectorComponent,
    FifthComponentAttributeComponent,
    InputtextComponent,
    InputNumbersComponent,
    InputdisabledComponent,
    ParentComponent,
    ChildComponent,
    TeacherComponent,
    StudentComponent,
    FirstDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CommomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
