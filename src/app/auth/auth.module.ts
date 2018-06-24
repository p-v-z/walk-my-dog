import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertService } from '../shared/alert.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  providers: [
    AlertService
  ]
})
export class AuthModule {}
