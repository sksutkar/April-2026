import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurdService } from '../curd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {
  userForm!: FormGroup
  userId!:any





  constructor(private _fb: FormBuilder, private _Https: CurdService, private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.createForm();
    this.userId=this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.getUserById(this.userId);
    }
  }


  createForm() {
    this.userForm = this._fb.group({
      userName: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    })
  }



  submit() {
    if (this.userId) {
      this.updateUser(this.userId)
    } else {
      this.saveData();
    }
  }

  saveData() {
    this._Https.AddsUsers(this.userForm.value).subscribe(() => {
      alert("User Added Successfully");
      this.router.navigate(['/curd-list']);
    })
  }



  updateUser(id: number) {
    this._Https.UpdateUser(id, this.userForm.value).subscribe(() => {
      alert("User Updated Successfully");

      this.router.navigate(['/curd-list']);
    })
  }

   getUserById(id: number){
    this._Https.GetUserById(id).subscribe((res:any)=>{
      this.userForm.patchValue(res);
    });
   }


  navigateTo() {
    this.router.navigate(['/curd-list']);
  }

}
