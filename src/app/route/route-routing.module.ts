import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { GradesComponent } from '../grades/grades.component';
import { GuardService } from '../guard.service';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { MystoreComponent } from '../mystore/mystore.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'grades', component: GradesComponent, canActivate: [GuardService ]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'store', component: MystoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
