import { Component, Input } from '@angular/core';
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
  { name: 'Banana' },
  { name: 'Cherry' },
  { name: 'Date' },
  { name: 'Elderberry' },
  { name: 'Fig' },
  { name: 'Grape' },
  { name: 'Honeydew' },
  { name: 'Indian Gooseberry' },
  { name: 'Jackfruit' },
  { name: 'Kiwi' },
  { name: 'Lemon' },
  { name: 'Mango' },
  { name: 'Nectarine' },
  { name: 'Orange' },
  { name: 'Pineapple' },
  { name: 'Quince' },
  { name: 'Raspberry' },
  { name: 'Strawberry' },
  { name: 'Tangerine' },
  { name: 'Ugli Fruit' },
  { name: 'Vanilla Bean' },
  { name: 'Watermelon' },
  { name: 'Xigua (Chinese Watermelon)' },
  { name: 'Yellow Passion Fruit' },
  { name: 'Zucchini' },
];
