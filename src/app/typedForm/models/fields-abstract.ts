import { FormControl, FormGroup } from '@angular/forms';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsAbstractModel } from '../../typedForm/models/fields-model';

export abstract class FieldsAbstract implements FieldsAbstractModel {
  _controlType: FieldsTypes;
  _key: string;
  _label: string;
  _order: number;
  _formGroup: FormGroup;

  constructor(
    controlType: FieldsTypes,
    key: string,
    label: string,
    order: number
  ) {
    this._controlType = controlType;
    this._key = key;
    this._label = label;
    this._order = order;
  }

  public get controlType(): FieldsTypes {
    return this._controlType;
  }

  public get key(): string {
    return this._key;
  }

  public get label(): string {
    return this._label;
  }

  public get order(): number {
    return this._order;
  }

  public set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }
}
