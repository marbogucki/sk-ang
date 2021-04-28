import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sbapp-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss'],
})
export class TdfComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: [{ value: 'Marcin', disabled: true }],
    });
  }

  ngOnInit(): void {}

  save(): void {
    console.log(this.myForm.value);
  }
}
