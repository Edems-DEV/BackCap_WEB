import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  NgbTypeahead,
  NgbTypeaheadSelectItemEvent,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { name } from 'src/app/models/names.model';

@Component({
  selector: 'app-input-multiselect',
  templateUrl: './input-multiselect.component.html',
  styleUrls: ['./input-multiselect.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMultiselectComponent),
      multi: true,
    },
  ],
})
export class InputMultiselectComponent {
  @Input() label: string | undefined;
  @Input() Data: name[];

  selectedItems: name[] = [];
  selectedItem: string = '';

  @Input() public parentForm: FormGroup;
  @Input() public fieldName: string;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  ngOnInit(): void {
    this.selectedItems = this.formField.value;
  }

  onSelectItem(event: NgbTypeaheadSelectItemEvent) {
    const item = event.item as name;
    this.selectedItems.push(item);
    this.formField.setValue(this.selectedItems); //not efficient
    this.selectedItem = '';
    setTimeout(() => {
      // add a small delay to ensure the input value has been cleared
      const inputEl = document.getElementById(
        'input-multiselect'
      ) as HTMLInputElement;
      inputEl.value = '';
    }, 50);
  }

  removeItem(index: number) {
    this.selectedItems.splice(index, 1);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.Data.filter(
          (item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        )
      )
    );

  resultFormatter = (result: name) => result.name;

  inputFormatter = (item: name) => item.name;

  //For form
  public writeValue(value: string): void {}
  public onChange(event: Event): void {}
  public registerOnChange(fn: any): void {}
  public registerOnTouched(fn: any): void {}
  public setDisabledState(isDisabled: boolean): void {}
}
