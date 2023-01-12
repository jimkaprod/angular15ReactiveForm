import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');

  constructor() {}

  ngOnInit() {}

  updateName() {
    this.name.setValue('Nancy');
  }
}
