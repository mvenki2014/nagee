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
  @Input() formSchema: FormSchema;
  constructor(
    private router: Router,
    private authenticate: AuthenticationService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    console.log('formSchema', this.formSchema);
  }

  onLoginFormSubmit(event) {
    console.log(event.formData);
    this.authenticate.login(event.formData)
      .subscribe(user => {
        if (user) {
          this.dialog.closeAll();
        }
      }, (err) => {
        console.log(err);
      });
  }

  onLoginFormReset(event) {
    console.log('event', event);
  }
}
