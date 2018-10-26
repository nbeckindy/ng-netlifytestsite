import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cards = [
    {
      title: 'Card 1 Title',
      content: 'Card content'
    },
    {
      title: 'Card 2 Title',
      content: 'Card content'
    },
    {
      title: 'Card 3 Title',
      content: 'Card content'
    },
    {
      title: 'Card 4 Title',
      content: 'Card content'
    }
  ]

  addCard() {
    this.cards.push({
      title: `Card ${this.cards.length + 1} Title`,
      content: 'Card content'
    });
  }

  removeCard(i) {
    this.cards.splice(i,1);
  }

}
