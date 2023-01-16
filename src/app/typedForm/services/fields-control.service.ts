import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FieldsBase } from '../../typedForm/models/fields-base';
import { FieldsModel } from '../../typedForm/models/fields-model';

@Injectable()
export class FieldsControlService {
  constructor(private fb: FormBuilder) {}

  toFormGroup(fields: FieldsModel[]): FormGroup {
    const group: any = {};

    console.log('--------------------------');
    console.log(fields);

    fields?.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl<string | number | undefined>(field.value || '', {
            nonNullable: true,
            validators: Validators.required,
          })
        : new FormControl<string | number | undefined>(field.value || '', {
            nonNullable: true,
          });
    });
    console.log('-----------111---------------');
    console.log(group);
    this.fb = new FormBuilder();
    return this.fb.group(group);
  }
}
