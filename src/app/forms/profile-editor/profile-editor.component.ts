import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  profileForm2 = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateSetProfile() {
    this.profileForm.setValue({
      lastName: 'Reggan',
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
        city: '123 Drew Street',
        state: '123 Drew Street',
        zip: '123 Drew Street',
      },
    });
  }

  updatePatchProfile() {
    this.profileForm.patchValue({
      firstName: 'Bernad',
      address: {
        street: 'Hollywood bd',
      },
    });
  }

  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateSetProfile2() {
    // this.profileForm2.setValue({
    //   lastName: 'Reggan',
    //   firstName: 'Nancy',
    //   address: {
    //     street: '123 Drew Street',
    //     city: '123 Drew Street',
    //     state: '123 Drew Street',
    //     zip: '123 Drew Street',
    //   },
    // });
  }

  updatePatchProfile2() {
    this.profileForm2.patchValue({
      firstName: 'Bernad',
      address: {
        street: 'Hollywood bd',
      },
    });
  }

  get aliases() {
    return this.profileForm2.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
