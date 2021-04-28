import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbapp-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  list = [
    {
      id: 1,
      name: 'aaa',
      age: 23,
    },
    {
      id: 2,
      name: 'bbb',
      age: 40,
    },
  ];

  data = [
    { title: 'tile', body: 'desc1' },
    { title: 'my info 2', body: 'lorem ipsum' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
