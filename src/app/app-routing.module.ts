import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { CurdComponent } from './My/curd/curd.component';
import { CurdListComponent } from './My/curd-list/curd-list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'curd', component: CurdComponent },
      { path: 'curd-list', component: CurdListComponent },
      // { path: '', redirectTo: 'curd', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
