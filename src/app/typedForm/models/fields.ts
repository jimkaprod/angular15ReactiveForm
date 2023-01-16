
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsModel } from '../../typedForm/models/fields-model';

export const fieldsData: FieldsModel[] = [
  {
    controlType: FieldsTypes.TEXTBOX,
    key: 'firstName',
    label: 'First name',
    value: 'Bombasto',
    required: true,
    order: 1,
  },
  {
    controlType: FieldsTypes.TEXTBOX,
    key: 'emailAddress',
    label: 'Email',
    value: '',
    type: 'email',
    order: 2,
  },
  {
    controlType: FieldsTypes.DROPDOWN,
    key: 'brave',
    label: 'Bravery Rating',
    options: [
      { key: 'solid', value: 'Solid' },
      { key: 'great', value: 'Great' },
      { key: 'good', value: 'Good' },
      { key: 'unproven', value: 'Unproven' },
    ],
    order: 3,
  }
];
