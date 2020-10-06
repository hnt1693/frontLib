import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {User} from '../../models/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserResponse} from '../../models/user-response';
import {NotifyService} from '../../services/notify.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validatingForm: FormGroup;
  loginForm: FormGroup;
  user: User;
  userResponse: UserResponse;

  constructor(private fb: FormBuilder, private loginService: LoginService,
              public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserResponse, private notifyService: NotifyService) {
    this.loginForm = this.fb.group({
        username: [''],
        password: ['']
      }
    )
  }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }

  submitForm(): void {
    this.user = this.loginForm.value;
    this.loginService.login(this.user).subscribe(
      res => {
        if (res.status === 200) {
          this.userResponse = res;
          this.notifyService.notify('Đăng nhập', res.message, 'sucesss');
          $('#closeModal').click();
        } else {
          this.notifyService.notify('Đăng nhập', res.message, 'danger');
        }


        // setTimeout(() => {
        //   $('#closeModal').click();
        // }, 10)
      }, error => {
        this.notifyService.notify('Đăng nhập', error.error.message, 'danger');
      }
    )
  }
}
