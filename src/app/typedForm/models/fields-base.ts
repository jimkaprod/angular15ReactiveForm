import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';

export class FieldsBase {
  value: string | number | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: FieldsTypes.TEXTBOX | FieldsTypes.DROPDOWN;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: string | number | undefined;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: FieldsTypes.TEXTBOX | FieldsTypes.DROPDOWN;
      type?: string;
      options?: { key: string; value: string }[];
    } = {
}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType as FieldsTypes.TEXTBOX | FieldsTypes.DROPDOWN;
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
