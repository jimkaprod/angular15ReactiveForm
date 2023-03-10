import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { QuestionService } from './questionnaire/services/question.service';
import { FieldsControlService } from './typedForm/services/fields-control.service';
import { FieldsService } from './typedForm/services/fields.service';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home Page',
    component: HomeComponent,
  },
  // Option 1: Lazy Loading another Routing Config
  // {
  //   path: 'user-details',
  //   title: 'User Details',
  //   loadChildren: () => import('./user-details/user-details.routes'),
  // },
  // {
  //   path: 'mailbox',
  //   title: 'Mailbox',
  //   loadChildren: () => import('./mailbox/mailbox.routes'),
  // },
  // Option 2: Directly Lazy Loading a Standalone Component
  {
    path: 'questionnaire',
    title: 'User',
    providers: [QuestionService],
    loadComponent: () =>
      import(
        './questionnaire/questionnaire-home/questionnaire-home.component'
      ).then((m) => m.QuestionnaireHomeComponent),
  },
  {
    path: 'typed-form',
    title: 'TypedForm',
    providers: [FieldsService],
    loadComponent: () =>
      import('./typedForm/typed-form/typed-form.component').then(
        (m) => m.TypedFormComponent
      ),
  },
];
