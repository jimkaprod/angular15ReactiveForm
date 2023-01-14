import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { QuestionBase } from '../models/question-base';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questionnaire-home',
  templateUrl: './questionnaire-home.component.html',
  styleUrls: ['./questionnaire-home.component.css'],
  standalone: true,
  imports: [DynamicFormComponent, AsyncPipe],
})
export class QuestionnaireHomeComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
