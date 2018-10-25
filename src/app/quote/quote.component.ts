import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote ('Stacy Chebet', 'Without the night, we can\'t see the stars', 'Bella, Twilight Saga'),
    new Quote ('Tracy Kimathi', 'There is no end to the pain, you must be numb', 'XXXTentacion'),
    new Quote ('Antonia Waweru', 'The future belongs to those who prepare for it today', 'Malcolm X'),
    new Quote ('Angela Nzioki', 'Our lives begin to end the day we become silent about things that matter', 'Martin Luther King Jr'),

];

  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote (isComplete, index) {
    if (isComplete) {
    const toDelete = confirm(`Are you sure you want to delete this quote?`);

    if (toDelete) {
      this.quotes.splice (index, 1);
    }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
