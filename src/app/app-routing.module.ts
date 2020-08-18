import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './WebPage/login/login.component';
import { ParkingLotComponent } from './WebApp/parking-lot/parking-lot.component';
import { ProfileComponent } from './WebApp/profile/profile.component';
import { RegistryComponent } from './WebApp/registry/registry.component';

const routes: Routes = [
  {path: 'Login', component:LoginComponent},
  {path: 'Estacionamiento', component:ParkingLotComponent},
  {path: 'Perfil', component:ProfileComponent},
  {path: 'Registro', component:RegistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
