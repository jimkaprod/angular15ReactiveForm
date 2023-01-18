import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appTextbox]',
  standalone: true,
})
export class TextboxDirective {
  // @Input('appField') field: FormGroup;

  @Input('appTextbox') set loadDetail(field: FormGroup) {
    console.log(field);
    Object.keys(field.controls).forEach((key) => {
      console.log(key, field.controls[key]);
      const div = document.createElement('div');
      div.textContent = key;
      this.elementRef.parentNode.insertBefore(div, this.elementRef.nextSibling);
      const divField = document.createElement('div');
      // const textbox = document.createElement('input');
      // divField.appendChild(textbox);
      const control = `
        <div [ngSwitch]="field.controlType">
          <input
            *ngSwitchCase="fieldsTypes.TEXTBOX"
            [formControlName]="field.key"
            [id]="field.key"
            [type]="field.type"
          />
          <select
          [id]="field.key"
          *ngSwitchCase="fieldsTypes.DROPDOWN"
          [formControlName]="field.key"
        >
            <option *ngFor="let opt of field.options" [value]="opt.key">
              {{ opt.value }}
            </option>
          </select>
        </div>`;
      // div.textContent = control;
      // this.elementRef.parentNode.insertBefore(divField, div);

      // return { key: field.controls[key] };
    });
    if (field) {
      // this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  elementRef: HTMLElement;

  constructor(
    private elRef: ElementRef,
    private viewContainer: ViewContainerRef
  ) {
    this.elementRef = elRef.nativeElement as HTMLElement;
  }

  ngAfterViewChecked(): void {
    // console.log('Directive>>', this.appField);
  }
}
