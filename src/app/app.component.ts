import { Component } from '@angular/core';
import {Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals = [
    new Quote ('Stacy Chebet', 'Without the night, we can\'t see the stars', \'Bella, Twilight Saga'),
    new Quote ('Tracy Kimathi', 'There is no end to the pain, you must be numb', 'XXXTentacion'),
    new Quote ('Antonia Waweru', 'The future belongs to those who prepare for it today', 'Malcolm X'),
    new Quote ('Angela Nzioki', 'Our lives begin to end the day we become silent about things that matter', 'Martin Luther King Jr'),

];
}
