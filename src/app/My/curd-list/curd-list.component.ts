import { Component, OnInit } from '@angular/core';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-curd-list',
  templateUrl: './curd-list.component.html',
  styleUrls: ['./curd-list.component.css']
})
export class CurdListComponent implements OnInit {
  userList: any[] = [];

  constructor(private _Https: CurdService,) {

  }

  ngOnInit(): void {
    this.GetUser();
  }



  GetUser() {
    this._Https.GetsUsers().subscribe((res: any) => {
      this.userList = res;
    })
  }

  // deleteUser(id: number) {
  //   this._Https.DeleteUser(id).subscribe(() => {
  //     alert("User Deleted...");
  //     this.GetUser();
  //   })
  // }


  deleteUser(id: number) {
  if (confirm('Are you sure you want to delete?')) {
    this._Https.DeleteUser(id).subscribe(() => {
      this.GetUser();
    });
  }
}




}
