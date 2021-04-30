import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuComponent } from './actu/actu.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: 'Suivi-des-tests', component : WelcomeComponent},
  {path: 'Actualite', component : ActuComponent},
  {path: 'login', component : LoginComponent},


{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
