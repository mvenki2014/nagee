import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './../../ui-components/popup/modal-popup/modal.component';
import { Subscription } from 'rxjs';
import { User } from './../../_models';
import { FormSchema } from '@app/_models';
import { loginFormSchema } from '@app/forms-schemas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  dialogRef: MatDialogRef<ModalComponent, any>;
  isUserLoggedIn: any;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.isUserLoggedIn = localStorage.getItem('currentUser');
    if (this.isUserLoggedIn) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log('this.currentUser', this.currentUser);
    } else {
      console.log('show login popup');
      this.openLoginPopup();
    }
  }

  openLoginPopup() {
    this.dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'LOGIN',
        contentSelector: 'app-login',
        showDialogActions: false,
        currentRoute: this.router.url,
        disableClose: true,
        formSchema: loginFormSchema
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(result => {
      this.isUserLoggedIn = localStorage.getItem('currentUser');
      if (this.isUserLoggedIn) {
        console.log('reload...');
      }
    });
  }
}
