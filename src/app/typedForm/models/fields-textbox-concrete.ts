import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldsTypes } from '../../typedForm/enums/fields-types.enum';
import { FieldsAbstract } from '../../typedForm/models/fields-abstract';
import { FieldModel, FieldsModel } from '../../typedForm/models/fields-model';

export class FieldsTextboxConcrete extends FieldsAbstract {
  constructor(
    controlType: FieldsTypes,
    key: string,
    label: string,
    order: number,
    private value: string | number
  ) {
    super(controlType, key, label, order);
    this.setFormGroup();
  }

  setFormGroup(): void {
    const formGoup = new FormGroup({});
    formGoup.addControl(
      super.label,
      new FormControl<string | number | undefined>(this.value || '', {
        nonNullable: true,
        validators: Validators.required,
      })
    );
    super.formGroup = formGoup;
  }

  getField(): FieldModel {
    return {
      data: {
        controlType: super.controlType,
        key: super.key,
        label: super.label,
        order: super.order,
      },
      formGroup: super.formGroup,
    };
  }
}
