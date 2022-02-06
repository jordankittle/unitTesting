import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list = ['Item 1', 'Item 2'];

  constructor() { }

  getList = of<Array<any>>(this.list);

  addToList(listItem: string) {
    console.log('service add')
    this.list.push(listItem);
  }

}
