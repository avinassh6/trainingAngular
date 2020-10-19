import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-practice';
  fromDate = '2020, 10, 15';
  constructor() {
    const now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4
    // const a = moment([2020, 10, 15]);
    const a = moment([this.fromDate]);
    const b = moment([1991, 11, 2]); // 1
    console.log(a.diff(b, 'years'));
    const y = a.diff(b, 'year');
    b.add(y, 'year');
    const m = a.diff(b, 'months');
    b.add(m, 'months');
    const d = a.diff(b, 'days');
    b.add(d, 'days');
    console.log(' years ' + y + ' months ' + m + 'days ' + d + ' ');
    // console.log(a);
  }
}
