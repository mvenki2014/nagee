import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '@app/_services';
import { User } from '@app/_models';
import { first } from 'rxjs/operators';

/** Error when invalid control is dirty, touched, or submitted. */
export class SignupErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  email = ''; // username
  password = '';
  confirmpassword = '';
  loading = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupForm = this.formBuilder.group({
      'email': [null,
        // Validators.compose([Validators.required, Validators.email])
      ],
      'password': [null,
        Validators.compose([
          // Validators.required,
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
        ])
      ],
      'confirmpassword': [null,
        Validators.compose([
          // Validators.required,
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
        ])
      ]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    return group.controls.password.value === group.controls.confirmpassword.value ? null : { notSame: true };
  }
  ngOnInit() {
  }

  onSignupFormSubmit(formData, event) {
    event.preventDefault();
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }
    const user: User = {
      id: null,
      token : null,
      username: 'ajay@test.com',
      password: '1234567',
      firstName: 'Ajay',
      lastName: 'B'
    };
    this.loading = true;
    this.userService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          console.log('registered', data);
        },
        error => {
          console.log('error', error);
        });
  }

}
