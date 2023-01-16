import { Injectable } from '@angular/core';
import { FieldsBase } from '../../typedForm/models/fields-base';
import { fieldsData } from '../../typedForm/models/fields';
import { Observable, of } from 'rxjs';
import { FieldsModel } from '../../typedForm/models/fields-model';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsTextbox } from '../../typedForm/models/fields-textbox';
import { FieldsDropdown } from '../../typedForm/models/fields-dropdown';
import { FieldsTextboxConcrete } from '../../typedForm/models/fields-textbox-concrete';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FieldsService {
  constructor() {}
  getFields(): Observable<FieldsModel[]> {
    const data: FieldsModel[] = fieldsData;
    const formGroup: FormGroup;
    data.forEach((field) => {
      if (field.controlType === FieldsTypes.TEXTBOX) {
        // new FieldsTextbox(field);
        const textbox = new FieldsTextboxConcrete(
          field.controlType,
          field.key,
          field.label,
          field.order,
          field.value,
        );
        formGroup.push(textbox.getControl());
      } else if (field.controlType === FieldsTypes.DROPDOWN) {
        new FieldsDropdown(field);
      }
    });

    return of(data.sort((a, b) => a.order - b.order));
  }
}
