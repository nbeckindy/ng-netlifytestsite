import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-details-modal',
  templateUrl: './card-details-modal.component.html',
  styleUrls: ['./card-details-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailsModalComponent implements OnInit {

  displayedColumns = ['date', 'amount', 'description'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CardDetailsModalComponent>
  ) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
