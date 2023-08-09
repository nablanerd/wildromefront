import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './pages/demo/demo.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InfoComponent } from './pages/info/info.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProvincelistComponent } from './pages/provincelist/provincelist.component';
import { ProvincedetailsComponent } from './pages/provincedetails/provincedetails.component';
import { ProvincebuildComponent } from './pages/provincebuild/provincebuild.component';

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


import { RessourcePageComponent } from './pages/ressourcepagecomponent/ressourcepagecomponent.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { GameoverComponent } from './pages/gameover/gameover.component';





const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'info', component: InfoComponent },
  { path: 'menu', component: MenuComponent },

  { path: 'provincelist', component: ProvincelistComponent },
  { path: 'provincedetails', component: ProvincedetailsComponent },
  { path: 'provincebuild', component: ProvincebuildComponent },

  { path: 'buildinglist', component: BuildinglistComponent },
  { path: 'buildingdetails/:id', component: BuildingdetailsComponent },
  { path: 'buildingbuild', component: BuildingbuildComponent },

  { path: 'legionlist', component: LegionlistComponent },

  { path: 'battlelist', component: BattlelistComponent },
  { path: 'battleattaque', component: BattleattaqueComponent },
  { path: 'battledefendre', component: BattledefendreComponent },
  { path: 'battlewin', component: BattlewinComponent },
  { path: 'battlelose', component: BattleloseComponent },

  { path: 'rdlist', component: RdlistComponent },
  { path: 'rddetails', component: RddetailsComponent },

  { path: 'walloffame', component: WalloffameComponent },


  { path: 'teststyle', component: TeststyleComponent },


  { path: 'ressourcepage', component: RessourcePageComponent },


  { path: 'logout', component: LogoutComponent },


  { path: 'gameover', component: GameoverComponent },
















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
