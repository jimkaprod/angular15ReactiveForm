import { FormControl } from '@angular/forms';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsAbstractModel } from '../../typedForm/models/fields-model';

export abstract class FieldsAbstract implements FieldsAbstractModel {
  controlType: FieldsTypes;
  key: string;
  label: string;
  order: number;

  constructor(
    controlType: FieldsTypes,
    key: string,
    label: string,
    order: number
  ) {
    this.controlType = controlType;
    this.key = key;
    this.label = label;
    this.order = order;
  }

  abstract getControlType(): FieldsTypes;

  abstract getControl(): FormControl;
}
