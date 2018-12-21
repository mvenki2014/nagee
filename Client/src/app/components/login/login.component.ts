import { Component, OnInit, Input } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../_services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './../../ui-components/popup/modal-popup/modal.component';
import { FormSchema } from '@app/_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private route: ActivatedRoute;
  private returnUrl = '';
  dialogRef: MatDialogRef<ModalComponent, any>;
  // loginForm: FormGroup;
  // email = '';
  // password = '';
  // user: any = {};
  @Input() formSchema: FormSchema;
  constructor(
    private router: Router,
    private authenticate: AuthenticationService,
    public dialog: MatDialog
  ) {
    // this.loginForm = this.formBuilder.group({
    //   'email': [null, Validators.compose([Validators.required, Validators.email])],
    //   'password': [null,
    //     Validators.compose([
    //       Validators.required,
    //       // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
    //     ])
    //   ]
    // });
  }

  ngOnInit() {
    console.log('formSchema', this.formSchema);
  }

  onLoginFormSubmit(event) {
    console.log('event', event);
    // const formData = {username: 'ajay@test.com', password : '1234567'};
    // this.authenticate.login(formData)
    // .subscribe(user => {
    //     console.log('logged in user', user);
    //   }, (err) => {
    //     console.log(err);
    //   });
  }

  onLoginFormReset(event) {
    console.log('event', event);
  }
}
