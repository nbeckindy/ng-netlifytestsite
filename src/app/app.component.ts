import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCardModalComponent } from './add-card-modal/add-card-modal.component';

import * as moment from 'moment';

interface ICard {
  title: string,
  content: string,
  budget: number,
  remaining: number,
  history: any[]
}
interface IHistory {
  description: string,
  cost: number,
  date: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cards: ICard[] = [
    {
      title: 'Gas',
      content: 'gas budget...',
      budget: 250,
      remaining: 182.62,
      history: [
        {
          description: 'Love\'s',
          cost: 32.98,
          date: moment([2018, 10, 3])
        },
        {
          description: 'Kroger',
          cost: 34.40,
          date: moment([2018, 10, 12])
        }
      ]
    },
    {
      title: 'Groceries',
      content: 'grocery budget',
      budget: 400,
      remaining: 149.57,
      history: [
        {
          description: 'Kroger',
          cost: 22.05,
          date: moment([2018, 10, 2])
        },
        {
          description: 'Kroger',
          cost: 12.14,
          date: moment([2018, 10, 4])
        },
        {
          description: 'Whole Foods',
          cost: 43.49,
          date: moment([2018, 10, 5])
        },
        {
          description: 'Fresh Thyme',
          cost: 17.21,
          date: moment([2018, 10, 6])
        },
        {
          description: 'Fresh Thyme',
          cost: 24.97,
          date: moment([2018, 10, 10])
        },
        {
          description: 'Kroger',
          cost: 3.99,
          date: moment([2018, 10, 10])
        },
        {
          description: 'Aldi',
          cost: 26.58,
          date: moment([2018, 10, 11])
        }
      ]
    },
    {
      title: 'Clothes',
      content: 'clothes budget',
      budget: 50,
      remaining: 12.20,
      history: [
        {
          description: 'FPA 2 Dresses',
          cost: 27.37,
          date: moment([2018, 10, 1])
        },
        {
          description: 'FPA 1 Beanie',
          cost: 10.43,
          date: moment([2018, 10, 5])
        }
      ]
    },
    {
      title: 'Restaurants',
      content: 'eating out budget',
      budget: 200,
      remaining: 200,
      history: []
    }
  ];

  constructor(
    public dialog: MatDialog,
    public cdr: ChangeDetectorRef
  ) {}

  addCard() {
    const dialogRef = this.dialog.open(AddCardModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cards.push({
          title: result.title,
          content: result.description,
          budget: result.budget,
          remaining: result.budget,
          history: []
        });
        this.cdr.detectChanges();
      }
    });
  }

  removeCard(event, idx): void {
    this.cards.splice(idx,1);
  }

}
