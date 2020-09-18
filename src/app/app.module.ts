import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentinterpolationComponent } from './third-componentinterpolation/third-componentinterpolation.component';
import { ForthcomponentselectorComponent } from './forthcomponentselector/forthcomponentselector.component';
import { FifthComponentAttributeComponent } from './fifth-component-attribute/fifth-component-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentinterpolationComponent,
    ForthcomponentselectorComponent,
    FifthComponentAttributeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
