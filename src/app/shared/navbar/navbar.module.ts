import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from '../register/register.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [RouterModule, CommonModule, NgbModule, MDBBootstrapModule, MatDialogModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  declarations: [NavbarComponent, LoginComponent, RegisterComponent],
  exports: [NavbarComponent, LoginComponent]
})

export class NavbarModule {
}
