import {
  AsyncPipe,
  JsonPipe,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { lastValueFrom, Observable } from 'rxjs';
import { FieldsBase } from '../../typedForm/models/fields-base';
import { FieldsModel } from '../../typedForm/models/fields-model';
import { FieldsControlService } from '../../typedForm/services/fields-control.service';
import { FieldsService } from '../../typedForm/services/fields.service';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';

interface LoginForm {
  email?: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.css'],
  standalone: true,
  providers: [FieldsControlService],
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    NgSwitch,
    NgFor,
    AsyncPipe,
    NgSwitchCase,
    NgIf,
  ],
})
export class TypedFormComponent implements OnInit {
  fields$: Observable<FieldsModel[]>;
  formFields!: FormGroup;

  fieldsTypes = FieldsTypes;

  loginForm = this.fb.group<LoginForm>({
    email: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: this.fb.control('', { nonNullable: true }),
  });
  constructor(
    private fb: FormBuilder,
    private fieldsService: FieldsService,
    private fieldsControlService: FieldsControlService
  ) {
    this.fields$ = fieldsService.getFields();
  }

  async ngOnInit() {
    this.formFields = this.fieldsControlService.toFormGroup(
      await lastValueFrom(this.fields$)
    );

    this.fields$.subscribe((res) => {
      console.log('res>>>>', res);
    });
  }

  reset() {
    this.loginForm.reset();
  }

  onSubmitFields() {
    console.log(this.formFields.value);
  }
}
