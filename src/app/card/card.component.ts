import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEntryModalComponent } from '../add-entry-modal/add-entry-modal.component';
import { CardDetailsModalComponent } from '../card-details-modal/card-details-modal.component';

interface ICard {
  title: string,
  content: string,
  budget: number,
  remaining: number,
  history: any[]
}
interface IHistory {
  description: string,
  cost: number
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input('card') card: ICard;

  @Output('removeThisCard') removeThisCard: EventEmitter<null> = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  remove() {
    this.removeThisCard.emit();
  }

  addEntryToBudgetDialog(card: ICard) {
    const dialogRef = this.dialog.open(AddEntryModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        card.remaining -= result.cost;
        card.history.push({
          description: result.description,
          cost: result.cost,
          date: result.date
        });
        this.cdr.detectChanges();
      }
    });
  }

  viewCardDetails(card): void {
    const dialogRef = this.dialog.open(CardDetailsModalComponent, {
      width: '500px',
      data: {
        card: card
      }
    });
  }

}
