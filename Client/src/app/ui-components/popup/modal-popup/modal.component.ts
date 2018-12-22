import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  title;
  contentSelector;
  cancelText;
  okText;
  disableClose;
}
@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private formSchema;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.data.formSchema) {
      this.formSchema = this.data.formSchema;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
