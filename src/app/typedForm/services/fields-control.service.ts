import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FieldsModel } from '../../typedForm/models/fields-model';

@Injectable()
export class FieldsControlService {
  constructor(private fb: FormBuilder) {}

  toFormGroup(fields: FieldsModel[]): FormGroup {
    const group: any = {};
    fields?.forEach((field) => {
      console.log('field----->>>>', field);
      group[field.key] = field.required
        ? new FormControl<string | number | undefined>(field.value || '', {
            nonNullable: true,
            validators: Validators.required,
          })
        : new FormControl<string | number | undefined>(field.value || '', {
            nonNullable: true,
          });
    });
    this.fb = new FormBuilder();
    return this.fb.group(group);
  }
}
