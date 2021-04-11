import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'sbapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sandbox';

  constructor() {}

  ngOnInit(): void {}
}
