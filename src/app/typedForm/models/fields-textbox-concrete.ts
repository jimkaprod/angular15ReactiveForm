import { FormControl } from '@angular/forms';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsAbstract } from '../../typedForm/models/fields-abstract';

export class FieldsTextboxConcrete extends FieldsAbstract {
  constructor(
    controlType: FieldsTypes,
    key: string,
    label: string,
    order: number,
    private value: string | number
  ) {
    super(controlType, key, label, order);
  }

  getControlType(): FieldsTypes.TEXTBOX {
    return FieldsTypes.TEXTBOX;
  }

  getControl(): FormControl {
    return new FormControl<string | number | undefined>(this.value || '', {
      //   nonNullable: true,
    });
  }

  // return new FormControl<string | number | undefined>(field.value || '', {
  //   nonNullable: true,
  // });
}
