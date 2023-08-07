import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

import {Router} from "@angular/router"

@Component({
  selector: 'app-buildingbuild',
  templateUrl: './buildingbuild.component.html',
  styleUrls: ['./buildingbuild.component.scss']
})
export class BuildingbuildComponent {

  provinceName : any
  provinceId : any

  buildings : any

  building : any

  selectedOption : any

  canBuild : boolean = false

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.provinceName = localStorage.getItem("provinceName")
    this.provinceId = localStorage.getItem("provinceId")

    this.playerService.getBuildingsAvaible((data:any)=>{

      this.buildings = data

      console.log(this.buildings, "this.buildings");

      if(this.buildings.length !=0)
      this.canBuild = true

    })



  }


  onSelect(type : any)
  {

this.building = this.buildings.filter((e : any) => e.type === type)[0]

  }
  
  onBuild()
  {

    console.log(this.buildings , "this.buildings ");
    
    console.log(this.building.id, "this.building.id");
    console.log(this.provinceId, "provinceId");

    
if(this.canBuild )
{

this.playerService.buildingInProvince(this.building.id, this.provinceId, (data : any)=>{
  
  console.log(data);


  this.router.navigate(['/buildinglist'])

});

}

  }




  goToBuildingList()
  {

    this.router.navigate(['/buildinglist'])

  }
  
}//
