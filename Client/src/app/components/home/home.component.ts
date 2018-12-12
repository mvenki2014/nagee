import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './../../ui-components/popup/modal-popup/modal.component';
import { Subscription } from 'rxjs';
import { User } from './../../_models';
import { FormSchema } from '@app/_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  dialogRef: MatDialogRef<ModalComponent, any>;
  isUserLoggedIn: any;
  formSchema: FormSchema;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    // this.isUserLoggedIn = localStorage.getItem('currentUser');
    this.formSchema = {
      name: 'myForm',
      classes: 'myForm myFormClass',
      enableResetButton: true,
      fields: [
        {
          label: 'name',
          name: 'name',
          type: 'text',
          value: 'Ajay',
          validators: ['required'],
          pattern: '/^[a-z][a-z\s]*$/',
          order: 1,
          placeholder: 'Name',
          error: 'Enter valid data'
        },
        {
          label: 'age',
          name: 'age',
          type: 'number',
          value: null,
          validators: ['required'],
          pattern: '/^[0-9]*$/',
          order: 2,
          placeholder: 'Age',
          error: 'Enter valid data'
        },
        {
          label: 'file',
          name: 'file',
          type: 'file',
          value: null,
          validators: ['required'],
          order: 3,
          placeholder: 'file',
          error: 'Enter valid data'
        }
      ]
    };
  }

  openRegisterPopup() {
    this.dialogRef = this.dialog.open(ModalComponent, {
      data: { title: 'REGISTER', contentSelector: 'app-signup', showDialogActions: false, currentRoute: this.router.url }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('reload the page');
    });
  }

  openLoginPopup() {
    this.dialogRef = this.dialog.open(ModalComponent, {
      data: { title: 'LOGIN', contentSelector: 'app-login', showDialogActions: false, currentRoute: this.router.url }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.isUserLoggedIn = localStorage.getItem('currentUser');
      if (this.isUserLoggedIn) {
        console.log('reload...');
      }
    });
  }

  goToUserProfile() {
    // this.router.navigateByUrl('/profile');
    // console.log('profile');
  }

  goToProducts() {
    console.log('products');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/');
    console.log('logout');
  }

  onSubmit(handler) {
    console.log(handler.event, handler.formData);
  }

  onReset(handler) {
    console.log(handler.event, handler.formData);
  }
}
