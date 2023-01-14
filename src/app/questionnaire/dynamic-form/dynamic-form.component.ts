import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormQuestionComponent, NgFor, NgIf],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  onReset() {
    this.form.reset();
  }
}
