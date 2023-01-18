import { Injectable } from '@angular/core';
import { fieldsData } from '../../typedForm/models/fields';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsDropdown } from '../../typedForm/models/fields-dropdown';
import { FieldsTextboxConcrete } from '../../typedForm/models/fields-textbox-concrete';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FieldsModel } from '../../typedForm/models/fields-model';

@Injectable()
export class FieldsService {
  fieldsForm = this.fb.group({
    fields: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  getFields(): FormGroup {
    const data: FieldsModel[] = fieldsData.sort((a, b) => a?.order - b?.order);

    data.forEach((field) => {
      if (field.controlType === FieldsTypes.TEXTBOX) {
        const textbox: FieldsTextboxConcrete = new FieldsTextboxConcrete(
          field.controlType,
          field.key,
          field.label,
          field.order,
          field.value
        );

        textbox.getField();
        console.log(textbox.getField());
      } else if (field.controlType === FieldsTypes.DROPDOWN) {
        new FieldsDropdown(field);
      }
    });

    // return of(data.sort((a, b) => a.order - b.order));
    return this.fieldsForm;
  }

  get fields() {
    return this.fieldsForm.get('fields') as FormArray;
  }
}
