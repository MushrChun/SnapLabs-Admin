import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalUsers: Number;
  totalInvestigations: Number;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    const url = 'http://localhost:4300/stat';
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.totalUsers = data['totalUsers'];
      this.totalInvestigations = data['totalInvestigations'];
    });
  }
}

