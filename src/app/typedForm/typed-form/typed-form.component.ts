import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
Validators,
} from '@angular/forms';

interface LoginForm {
  email?: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class TypedFormComponent implements OnInit {

  loginForm = this.fb.group<LoginForm>({
    email: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    password: this.fb.control('', { nonNullable: true }),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  reset() {}
}
