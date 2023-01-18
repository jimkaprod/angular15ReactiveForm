import { FormControl, FormGroup } from '@angular/forms';
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
}
