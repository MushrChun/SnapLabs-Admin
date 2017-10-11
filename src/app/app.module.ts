import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { InvestigationsComponent } from './investigations/investigations.component';
import { ProfileComponent } from './profile/profile.component';

import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    InvestigationsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'investigations',
        component: InvestigationsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]),
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
