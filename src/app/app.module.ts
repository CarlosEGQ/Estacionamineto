import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './WebPage/login/login.component';
import { RegisterComponent } from './WebPage/register/register.component';
import { AdminComponent } from './WebApp/admin/admin.component';
import { ParkingLotComponent } from './WebApp/parking-lot/parking-lot.component';
import { ProfileComponent } from './WebApp/profile/profile.component';
import { RegistryComponent } from './WebApp/registry/registry.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ParkingLotComponent,
    ProfileComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
