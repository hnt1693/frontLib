import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { RegisterComponent } from './shared/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Page404Component } from './pages/page404/page404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookComponent } from './pages/book/book.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    Page404Component,
    BookComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule

  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
