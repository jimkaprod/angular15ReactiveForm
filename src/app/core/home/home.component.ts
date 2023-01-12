import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from '../../forms/name-editor/name-editor.component';
import { ProfileEditorComponent } from '../../forms/profile-editor/profile-editor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NameEditorComponent, ProfileEditorComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
