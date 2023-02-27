import { StorageService } from './../../services/AuthService/storage.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-signup-signin',
  templateUrl: './signup-signin.component.html',
  styleUrls: ['./signup-signin.component.css']
})
export class SignupSigninComponent implements OnInit {
  loginForm: FormGroup | any;
  forgotForm: FormGroup | any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  currentUser: any;
  constructor(private authService: AuthService,
    private storageService: StorageService) {

  }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  onLogin() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService = data;
        console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
  }
  reloadPage(): void {
    window.location.reload();
  }

}
