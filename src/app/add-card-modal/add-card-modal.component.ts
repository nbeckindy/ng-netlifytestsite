import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card-modal.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCardModalComponent implements OnInit {

    result: {
      title: string,
      description: string,
      budget: number
    } = {
      title: '',
      description: '',
      budget: undefined
    }
  constructor(
    public dialogRef: MatDialogRef<AddCardModalComponent>
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
