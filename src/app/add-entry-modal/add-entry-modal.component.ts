import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'add-entry-modal',
  templateUrl: './add-entry-modal.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEntryModalComponent {

  result: {
    description: string,
    cost: number,
    date: number
  } = {
    description: '',
    cost: undefined,
    date: moment.now()
  }
  constructor(
    public dialogRef: MatDialogRef<AddEntryModalComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
