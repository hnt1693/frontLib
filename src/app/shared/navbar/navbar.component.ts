import {Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import {ROUTES} from '../../sidebar/sidebar.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {UserResponse} from '../../models/user-response';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})

export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;
  private user: UserResponse;
  private isLogin = false;
  public isCollapsed = true;
  @ViewChild('navbar-cmp', {static: false}) button;

  constructor(location: Location, private renderer: Renderer2, private element: ElementRef, private router: Router, public dialog: MatDialog) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
    });
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    html.classList.add('nav-open');
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    this.sidebarVisible = true;
  };

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      setTimeout(function () {
        mainPanel.style.position = '';
      }, 500);
    }
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }

  validatingForm: FormGroup;

  get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }

  openLoginForm(): void {
    const dialogRef = this.dialog.open(LoginComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user = result;
      if (this.user !== undefined) {
        this.isLogin = true;
        $.notify({
          icon: 'https://randomuser.me/api/portraits/med/men/77.jpg',
          title: this.user.username,
          message: 'Bạn đã đăng nhập thành công',

        }, {
          type: 'minimalist',
          delay: 2000,
          icon_type: 'image',
          template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<img data-notify="icon" class="img-circle pull-left">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '</div>'
        });
      }
    });
  }

  openRegisForm(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  logout() {
    this.isLogin = false;
  }
}
