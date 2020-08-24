import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {Employee} from '../app.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  public dialogData: Employee[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PopupComponent>) {
    this.dialogData = (data as Employee[]);
  }

  // tslint:disable-next-line:typedef
  close() {
    this.dialogRef.close();
  }
}
