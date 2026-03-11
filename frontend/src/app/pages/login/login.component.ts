import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required]]
  });
  notvalidusernamepasword = false;

  constructor(private fb: FormBuilder,private api: AuthService, private router: Router) {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // clear previous login error each time we submit
    this.notvalidusernamepasword = false;
    if (this.loginForm.valid) {
      
      this.api.login(this.f.username.value as string, this.f.password.value as string).subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed:', error);
          this.notvalidusernamepasword = true;
        }
        
      );
    }
  }
}
