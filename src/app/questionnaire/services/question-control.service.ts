import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { QuestionBase } from '../models/question-base';

interface QuestionForm {
  [key: string]: number;
}

@Injectable()
export class QuestionControlService {
  constructor(private fb: FormBuilder) {}
  toFormGroup(questions: QuestionBase<string>[]): FormGroup {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl<string>(question.value || '', {
            nonNullable: true,
            validators: Validators.required,
          })
        : new FormControl<string>(question.value || '', {
            nonNullable: true,
          });
    });
    this.fb = new FormBuilder();
    return this.fb.group<QuestionForm>(group);
  }
}
