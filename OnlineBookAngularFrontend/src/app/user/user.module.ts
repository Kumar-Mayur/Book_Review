import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBooklistComponent } from './user-booklist/user-booklist.component';
import { UserBookratingComponent } from './user-bookrating/user-bookrating.component';
import { UheaderComponent } from './uheader/uheader.component';
import { UfooterComponent } from './ufooter/ufooter.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserprofileeditComponent } from './userprofileedit/userprofileedit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";



@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    UserBooklistComponent,
    UserBookratingComponent,
    UheaderComponent,
    UfooterComponent,
    UserprofileComponent,
    UserprofileeditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, //We need to import within the module also
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
    
  ]
})
export class UserModule { }
