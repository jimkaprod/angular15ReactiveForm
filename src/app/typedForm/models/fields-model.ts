import { FormGroup } from '@angular/forms';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';

export interface TextboxModel {
  value: string | number | undefined;
}

export interface FieldsModel {
  order: number;
  controlType?: FieldsTypes.TEXTBOX | FieldsTypes.DROPDOWN;
  key: string;
  label: string;
  value?: string | number | undefined;
  required?: boolean;
  type?: string;
  options?: { key: string; value: string }[];
}

export interface FieldsAbstractModel {
  _controlType?: FieldsTypes;
  _key: string;
  _label: string;
  _order: number;
  _formGroup: FormGroup;
}

export interface FieldModel {
  data: FieldDataModel;
  formGroup: FormGroup;
}

export interface FieldDataModel {
  controlType?: FieldsTypes;
  key: string;
  label: string;
  order: number;
}
