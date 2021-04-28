import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'sbapp-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent<T> implements OnInit {
  @Input() myListRef: TemplateRef<HTMLElement>;
  @Input() data;
  constructor() {}

  ngOnInit(): void {}
}
