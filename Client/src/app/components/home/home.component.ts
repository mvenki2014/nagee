import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './../../ui-components/popup/modal-popup/modal.component';
import { Subscription } from 'rxjs';
import { User } from './../../_models';
import { FormSchema } from '@app/_models';
import { AuthenticationService } from '@app/_services';

import { loginFormSchema } from '@app/forms-schemas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser;
  dialogRef: MatDialogRef<ModalComponent, any>;
  currentUserSubscription: Subscription;
  isUserLoggedIn: any;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.isUserLoggedIn = !!this.currentUser;
    if (!this.isUserLoggedIn {
      this.openLoginPopup();
    }
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
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
        console.log('show spinner and load accordingly...');
      }
    });
  }
}
