import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginUserForm!: FormGroup



  constructor(private _fb: FormBuilder, private _Https: LoginService, private router: Router) {

  }

  ngOnInit(): void {

   
    this.LoginUserForm = this._fb.group({
      user_email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  loginForm() {

  if (this.LoginUserForm.invalid) {
    alert("Please fill all fields");
    return;
  }

  const email = this.LoginUserForm.value.user_email;
  const password = this.LoginUserForm.value.password;

  this._Https.GetUserData(`login?user_email=${email}&password=${password}`)
    .subscribe((res: any) => {

      if (res.length > 0) {
        alert("Login successfully..");
        localStorage.setItem("login", JSON.stringify(res[0]));
        // this.router.navigate(['/curd']);
        this.router.navigate(['']);   // ✅ correct route
      } else {
        alert("Invalid Email or Password");
      }

    });
}

}