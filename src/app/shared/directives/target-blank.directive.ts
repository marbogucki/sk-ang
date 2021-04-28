import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sbappTarget]',
})
export class TargetDirective {
  @Input() set sbappTarget(value: string) {
    this.target = value || '_blank';
  }

  @HostBinding('attr.target') target;
}
