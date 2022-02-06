import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	list: Array<any> = new Array();
	test = 'test';
	testlist= [1,2,3];

	constructor(private service: ListService) {
		service.getList.subscribe(list => {
			this.list = list;
		});
	 }

	ngOnInit(): void {
	}

	addToList(listItem: string) {
		this.service.addToList(listItem);
		console.log('new list: ', this.list);
	}
}
