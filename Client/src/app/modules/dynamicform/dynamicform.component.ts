import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormSchema } from '@app/_models';

@Component({
    selector: 'app-dynamicform',
    templateUrl: './dynamicform.component.html',
    styleUrls: ['./dynamicform.component.scss']
  })
  export class DynamicFormComponent implements OnInit {
    @Input() formSchema: any; // json schema data to generate form
    _form: FormGroup;
    @Output() submitHandler: EventEmitter<any> = new EventEmitter(true);
    @Output() resetHandler: EventEmitter<any> = new EventEmitter(true);

    constructor(
      private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
      const fields = this.formSchema.fields;
      const formBuilderGroupObject = {};
      fields.forEach(field => {
        const validators = [];
        field.validators.forEach(validator => {
          validators.push(Validators[validator]);
        });
        if (field.pattern) {
          validators.push(Validators.pattern(field.pattern));
        }
        formBuilderGroupObject[field.name] = [field.value, Validators.compose(validators)];
      });
      this._form = this.formBuilder.group(formBuilderGroupObject);
    }

    onFileInput(formData, field, event) {
      formData[field] = event.srcElement.files;
      console.log('formData', formData);
    }

    onFormSubmit(formData, event) {
      this.submitHandler.emit({event, formData});
    }

    onFormReset(formData, event) {
      this.resetHandler.emit({event, formData});
    }
}
