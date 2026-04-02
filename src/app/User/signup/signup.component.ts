import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignUpForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _Https: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.SignUpForm = this._fb.group({
      user: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signup() {
    if (this.SignUpForm.invalid) {
      alert("Please fill all fields correctly");
      return;
    }

    this._Https.SaveUserData('signup', this.SignUpForm.value)
      .subscribe((res: any) => {
        alert('Signup Successful');
        this.router.navigate(['/login']);
      });
  }
}