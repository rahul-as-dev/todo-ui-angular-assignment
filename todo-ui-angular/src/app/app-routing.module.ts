import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/angular-auth-guard.service';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService]
  },
  {path: 'about', component: AboutComponent},
  {path: 'login', component: AuthLoginComponent},
  {path: 'register', component: AuthRegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
