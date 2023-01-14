import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgSwitch, NgSwitchCase, NgIf, NgFor],
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;

  constructor() {
    console.log('FORM LOG>>', this.form);
  }
  get isValid() {
    console.log('-->', this.form.controls[this.question.key].valid);
    return this.form.controls[this.question.key].valid;
  }
}
