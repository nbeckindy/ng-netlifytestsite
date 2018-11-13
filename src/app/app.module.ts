import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { AddEntryModalComponent } from './add-entry-modal/add-entry-modal.component';
import { AddCardModalComponent } from './add-card-modal/add-card-modal.component';
import { CardDetailsModalComponent } from './card-details-modal/card-details-modal.component';

library.add(faPlus, faTimes);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddEntryModalComponent,
    AddCardModalComponent,
    CardDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule,
    FontAwesomeModule
  ],
  entryComponents: [
    AddEntryModalComponent,
    AddCardModalComponent,
    CardDetailsModalComponent
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
