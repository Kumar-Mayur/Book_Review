import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddbookComponent } from './admin/admin-addbook/admin-addbook.component';
import { AdminBookeditComponent } from './admin/admin-bookedit/admin-bookedit.component';
import { AdminBooklistComponent } from './admin/admin-booklist/admin-booklist.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRatinglistComponent } from './admin/admin-ratinglist/admin-ratinglist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserBooklistComponent } from './user/user-booklist/user-booklist.component';
import { UserBookratingComponent } from './user/user-bookrating/user-bookrating.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserprofileeditComponent } from './user/userprofileedit/userprofileedit.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'userlogin', component: UserLoginComponent},
  {path:'userreg', component: UserRegisterComponent},
  {path:'adminlogin', component: AdminLoginComponent},
  {path:'admindash', component: AdminDashboardComponent},
  {path:'userdash', component: UserDashboardComponent},
  {path:'userbklst', component: UserBooklistComponent},
  {path:'userbkrt/:id', component: UserBookratingComponent},
  {path:'adminbook', component: AdminBooklistComponent},
  {path:'adminbkedit/:id', component: AdminBookeditComponent},
  {path:'adminratlist', component: AdminRatinglistComponent},
  {path:'adminaddbook', component: AdminAddbookComponent},
  {path:'userprofile', component: UserprofileComponent},
  {path:'userprofileedit/:id', component: UserprofileeditComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
