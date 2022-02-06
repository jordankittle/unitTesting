import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY, from, Observable, of } from 'rxjs';
import { ListService } from '../services/list.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [ListService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.debugElement.componentInstance;
    service = fixture.debugElement.injector.get(ListService);
    console.log('service: ', service);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set list property returned from service', () => {
    const testList = ['Item 1', 'Item 2'];
    const spy = spyOn<any>(service, 'getList')
      .and.callFake(() => {
        return from([testList]);
      });
    component.ngOnInit();
    expect(component.list).toEqual(testList);
  });

  it('should save new item to list', () => {
    const spy = spyOn(service, 'addToList')
      .and.callFake(() => {
        return EMPTY;
      });
    component.addToList('New List Item');
    expect(spy).toHaveBeenCalled();
  });

  it('should add the new list item to the component', () => {
    service = new ListService();
    const testListItem = 'New List Item';
    component.addToList(testListItem);
    expect(component.list).toContain(testListItem);
  });
});
