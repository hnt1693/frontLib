import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';
import {LoginService} from '../../services/login.service';
import {HelperService} from '../../services/helper.service';
import {Role} from '../../models/role';
import {NotifyService} from '../../services/notify.service';


declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  roles: Role[];

  constructor(private fb: FormBuilder, private loginService: LoginService, private helper: HelperService,
              private notifyService: NotifyService) {
    this.registerForm = this.fb.group({
        username: [''],
        password: [''],
        email: ['']
      }
    )
    this.helper.getAllRole().subscribe(
      res => this.roles = res,
      error => {
      }
    )
  }

  ngOnInit(): void {
  }

  register() {
    this.user = this.registerForm.value;
    console.log(this.user)
    this.loginService.register(this.user).subscribe(
      res => {
        let mess = res.message;
        if (res.status === 200) {
          this.notifyService.notify('Đăng ký', mess, 'success');

        } else {
          this.notifyService.notify('Đăng ký', mess, 'danger');
        }
      }
      ,
      error => {
        console.log(error);
      }
    )
  }

  mappingRoles(roles: Role[]): string[] {
    let arr = [];
    arr.push(roles[0].name);
    return arr;
  }
}
