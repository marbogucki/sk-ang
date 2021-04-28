import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sbapp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searchedInputText: EventEmitter<string> = new EventEmitter<string>();

  public searchInput: FormControl = new FormControl('');
  private destroy$ = new Subject();

  ngOnInit(): void {
    this.emitSearchText();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  emitSearchText(): void {
    const DelayTime = 400;

    this.searchInput.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(DelayTime), takeUntil(this.destroy$))
      .subscribe((value: string) => this.searchedInputText.emit(value));
  }
}
