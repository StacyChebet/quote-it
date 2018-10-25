import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  Upvotes: number = 0;
  Downvotes: number = 0;

  likeButtonClick() {
    this.Upvotes++;
  }

  dislikeButtonClick() {
    this.Downvotes++;
  }

  @Input () quote: Quote;
  @Output () isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean ) {
    this.isComplete.emit(complete);
  }



  constructor() { }

  ngOnInit() {
  }

}
