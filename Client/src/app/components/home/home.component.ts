import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './../../ui-components/popup/modal-popup/modal.component';
import { Subscription } from 'rxjs';
import { User } from './../../_models';
import { FormSchema } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser;
  currentUserSubscription: Subscription;
  isUserLoggedIn: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    console.log('loggedInUser', this.activeRoute.snapshot.data.user);
  }
  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }
}
