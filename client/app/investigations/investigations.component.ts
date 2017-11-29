import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { PageEvent } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css']
})
export class InvestigationsComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'creator', 'serialNumber', 'createdDate', 'lastupdatedDate', 'labTitle', 'action'];
  database = new InvestigationsDatabase();
  dataSource: InvestigationsDataSource | null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataSource = new InvestigationsDataSource(this.database);
    this.fetchData();
  }

  ngAfterViewInit() {
  }

  fetchData() {
    const url = 'http://localhost:4300/investigations';
    this.http.get(url).subscribe((list: Array<Object>) => {
      list.forEach(element => {
        const item: Element = {
          id: element['_id'],
          lastupdatedDate: element['lastUpdatedAt'],
          labTitle: element['labTitle'],
          creator: element['createdBy'],
          serialNumber: element['serialNumber'],
          createdDate: element['createdAt']
        };
        // data.push(item);
        this.database.addElement(item);
      });
    });
  }

}


export interface Element {
  id: string;
  creator: string;
  serialNumber: number;
  createdDate: string;
  lastupdatedDate: string;
  labTitle: string;
}


export class InvestigationsDatabase {
  dataChange: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>([]);
  get data(): Element[] { return this.dataChange.value; }

  constructor() { }
  addElement(item: Element) {
    const copiedData = this.data.slice();
    copiedData.push(item);
    this.dataChange.next(copiedData);
  }
}

export class InvestigationsDataSource extends DataSource<any> {

  constructor(private _investigationDatabase: InvestigationsDatabase) {
    super();
  }

  connect(): Observable<Element[]> {
    return this._investigationDatabase.dataChange;
  }

  disconnect() { }
}
