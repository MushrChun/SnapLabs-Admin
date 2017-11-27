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
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css']
})
export class InvestigationsComponent implements OnInit {

  displayedColumns = ['id', 'creator', 'serialNumber', 'createdDate', 'lastupdatedDate', 'labTitle', 'action'];
  dataSource = new ExampleDataSource();

  constructor() { }

  ngOnInit() {
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

const data: Element[] = [
  { id: '59**3975ff', creator: 'admin', serialNumber:1, createdDate: '2017/09/17', lastupdatedDate: '2017/09/18', labTitle:'lab1' },
  { id: '59**3e75ff', creator: 'admin', serialNumber:2, createdDate: '2017/09/17', lastupdatedDate: '2017/09/18', labTitle:'lab2' },
  { id: '59**1275ff', creator: 'admin', serialNumber:3, createdDate: '2017/09/17', lastupdatedDate: '2017/09/18', labTitle:'lab3' },
  { id: '59**3915ff', creator: 'admin', serialNumber:4, createdDate: '2017/09/17', lastupdatedDate: '2017/09/18', labTitle:'lab4' },
  { id: '59**3e55ff', creator: 'admin', serialNumber:5, createdDate: '2017/09/17', lastupdatedDate: '2017/09/18', labTitle:'lab5' },
  { id: '59**1273ff', creator: 'admin', serialNumber:6, createdDate: '2017/09/17', lastupdatedDate: '2017/09/18', labTitle:'lab6' },
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() { }
}

