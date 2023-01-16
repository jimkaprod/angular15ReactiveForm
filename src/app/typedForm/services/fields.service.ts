import { Injectable } from '@angular/core';
import { FieldsBase } from '../../typedForm/models/fields-base';
import { fieldsData } from '../../typedForm/models/fields';
import { Observable, of } from 'rxjs';
import { FieldsModel } from '../../typedForm/models/fields-model';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsTextbox } from '../../typedForm/models/fields-textbox';
import { FieldsDropdown } from '../../typedForm/models/fields-dropdown';

@Injectable()
export class FieldsService {
  constructor() {}
  getFields(): Observable<FieldsModel[]> {
    const data: FieldsModel[] = fieldsData;

    data.forEach((field) => {
      if (field.controlType === FieldsTypes.TEXTBOX) {
        new FieldsTextbox(field);
      } else if (field.controlType === FieldsTypes.DROPDOWN) {
        new FieldsDropdown(field);
      }
    });

    return of(data.sort((a, b) => a.order - b.order));
  }
}
