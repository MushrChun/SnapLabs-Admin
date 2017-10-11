import { Component, ViewChild, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';
import { MatIconModule } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['id', 'name', 'email', 'action'];
  dataSource = new UserDataSource();

  constructor() { }

  ngOnInit() {

  }
}

export interface Element {
  id: string;
  name: string;
  email: string;
  action: string;
}

const data: Element[] = [
  { id: '59**3975ff', name: 'admin', email: 'admin@admin', action: 'H' },
  { id: '59**e7a8b5', name: 'guest', email: 'guest@guest', action: 'H' },
  { id: '59**506249', name: 'admin1', email: 'admin1@admin', action: 'H' }
];

export class UserDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() { }
}
