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

  selectedItems: Item[] = [];
  selectedItem: string = '';

  onSelectItem(event: NgbTypeaheadSelectItemEvent) {
    const item = event.item as Item;
    this.selectedItems.push(item);
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
        ITEMS.filter(
          (item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        )
      )
    );

  resultFormatter = (result: Item) => result.name;

  inputFormatter = (item: Item) => item.name;
}

interface Item {
  name: string;
}

const ITEMS: Item[] = [
  { name: 'Apple' },
  { name: 'Pc1' },
  { name: 'Pc2' },
  { name: 'Pc3' },
  { name: 'Machine' },
  { name: 'Joe PC' },
  { name: 'NASA PC' },
  { name: 'NASA PC' },
  { name: 'Ultimate 3000' },
  { name: 'Group1' },
  { name: 'Group2' },
  { name: 'Group3' },
  { name: 'Room-107' },
];
