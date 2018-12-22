import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './../ui-components/popup/modal-popup/modal.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '@app/_models';

import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    dialogRef: MatDialogRef<ModalComponent, any>;
    currentUserSubscription: Subscription;
    constructor(
        private http: HttpClient,
        private router: Router,
        public dialog: MatDialog
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    loggedInUser() {
        // Check whether the token is expired and return
        // true or false
        let user = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
        if (user && jwtHelper.isTokenExpired(user.token)) {
            return user;
        } else {
            setTimeout(() => {
                this.dialogRef = this.dialog.open(ModalComponent, {
                    data: {
                        title: 'LOGIN',
                        contentSelector: 'app-login',
                        showDialogActions: false,
                        currentRoute: this.router.url,
                        disableClose: true
                    }
                });
                this.dialogRef.disableClose = true;
                this.dialogRef.afterClosed().subscribe(result => {
                    user = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
                    if (user && jwtHelper.isTokenExpired(user.token)) {
                        return user;
                    }
                });
            }, 0);
        }
    }

    login({ username, password }) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password: '1234567' })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
