import { FormControl } from '@angular/forms';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsAbstract } from '../../typedForm/models/fields-abstract';

export class FieldsDropdownConcrete extends FieldsAbstract {
  constructor(
    controlType: FieldsTypes,
    key: string,
    label: string,
    order: number
  ) {
    super(controlType, key, label, order);
  }

  getControlType(): FieldsTypes.DROPDOWN {
    return FieldsTypes.DROPDOWN;
  }

  getControl(): FormControl {
    return null;
  }

  // return new FormControl<string | number | undefined>(field.value || '', {
  //   nonNullable: true,
  // });
}
