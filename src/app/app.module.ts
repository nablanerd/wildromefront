import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoPageComponent } from './pages/demo/demo.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';

import { LoginComponent } from './pages/login/login.component';
import { InputtextComponent } from './components/inputtext/inputtext.component';
import { InputpasswordComponent } from './components/inputpassword/inputpassword.component';
import { RegisterComponent } from './pages/register/register.component';
import { InfoComponent } from './pages/info/info.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProvincelistComponent } from './pages/provincelist/provincelist.component';
import { ProvincedetailsComponent } from './pages/provincedetails/provincedetails.component';
import { ProvincebuildComponent } from './pages/provincebuild/provincebuild.component';
import { RessourcesComponent } from './components/ressources/ressources.component';

import { BuildinglistComponent } from './pages/buildinglist/buildinglist.component';
import { BuildingbuildComponent } from './pages/buildingbuild/buildingbuild.component';
import { BuildingdetailsComponent } from './pages/buildingdetails/buildingdetails.component';
import { LegionlistComponent } from './pages/legionlist/legionlist.component';
import { BattlelistComponent } from './pages/battlelist/battlelist.component';
import { BattleattaqueComponent } from './pages/battleattaque/battleattaque.component';
import { BattledefendreComponent } from './pages/battledefendre/battledefendre.component';
import { BattlewinComponent } from './pages/battlewin/battlewin.component';
import { BattleloseComponent } from './pages/battlelose/battlelose.component';
import { RdlistComponent } from './pages/rdlist/rdlist.component';
import { RddetailsComponent } from './pages/rddetails/rddetails.component';
import { WalloffameComponent } from './pages/walloffame/walloffame.component';

import { TeststyleComponent } from './pages/teststyle/teststyle.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RessourcePageComponent } from './pages/ressourcepagecomponent/ressourcepagecomponent.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [AppComponent, DemoPageComponent, DemoComponent, DemoPipe, DemoDirective, LoginComponent, InputtextComponent, InputpasswordComponent, RegisterComponent, InfoComponent, MenuComponent, ProvincelistComponent, ProvincedetailsComponent, ProvincebuildComponent, RessourcesComponent, BuildinglistComponent, BuildingbuildComponent, BuildingdetailsComponent, LegionlistComponent, BattlelistComponent, BattleattaqueComponent, BattledefendreComponent, BattlewinComponent, BattleloseComponent, RdlistComponent, RddetailsComponent, WalloffameComponent, TeststyleComponent, RessourcePageComponent, LogoutComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
