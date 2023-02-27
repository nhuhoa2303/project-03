import { StorageService } from './../../services/AuthService/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/AuthService/auth.service';


@Component({
  selector: 'app-headerpage',
  templateUrl: './headerpage.component.html',
  styleUrls: ['./headerpage.component.css']
})
export class HeaderpageComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  currentUser: any;
  myScriptElement: HTMLScriptElement;
  constructor(private authService: AuthService,
              private router: Router,
              private toastrService: ToastrService,
              private storageService: StorageService) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./assets/js/theme.js"
    document.body.appendChild(this.myScriptElement);
  }
  ngOnInit(): void {
    // dung de sd file js trong file ts
    // navbarFixed();

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
    this.currentUser = this.storageService.getUser();
    console.log(this.storageService.getUser());

  }
  onSubmitRegister(): void {
    const { username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/').then(() => {
          this.toastrService.success('Đăng kí thành công!');
        });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  onSubmitLogin(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
