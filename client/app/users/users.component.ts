import { Component, ViewChild, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
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
  database = new UsersDatabase();
  dataSource: UsersDataSource | null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataSource = new UsersDataSource(this.database);
    this.fetchData();
  }

  fetchData() {
    const url = 'http://localhost:4300/users';
    this.http.get(url).subscribe((list: Array<Object>) => {
      list.forEach(element => {
        const item: Element = {
          id: element['_id'],
          name: element['name'],
          email: element['email']
        };
        // data.push(item);
        this.database.addElement(item);
      });
    });
  }
}

export interface Element {
  id: string;
  name: string;
  email: string;
}

const data: Element[] = [
];

export class UsersDatabase {
  dataChange: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>([]);
  get data(): Element[] { return this.dataChange.value; }

  constructor() { }
  addElement(item: Element) {
    const copiedData = this.data.slice();
    copiedData.push(item);
    this.dataChange.next(copiedData);
  }
}

export class UsersDataSource extends DataSource<any> {

  constructor(private _investigationDatabase: UsersDatabase) {
    super();
  }

  connect(): Observable<Element[]> {
    return this._investigationDatabase.dataChange;
  }

  disconnect() { }
}
