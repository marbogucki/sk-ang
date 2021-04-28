import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sbapp-ng-tools',
  templateUrl: './ng-tools.component.html',
  styleUrls: ['./ng-tools.component.scss'],
})
export class NgToolsComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    });
  }

  ngOnInit(): void {}

  saveData(): void {
    console.log(this.userForm.value);
  }

  get firstName(): AbstractControl {
    return this.userForm.get('firstName');
  }

  get age(): AbstractControl {
    return this.userForm.get('age');
  }
}

const errorMessages = [
  {
    type: 'required',
    message: 'field is required',
  },
  {
    type: 'minlength',
    message: 'length',
  },
];
