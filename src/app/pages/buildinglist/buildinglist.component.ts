import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

import {Router} from "@angular/router"

import { Building } from "../../models/building.model";

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrls: ['./buildinglist.component.scss']
})
export class BuildinglistComponent implements OnInit {
  provinceName : any =null
  provinceId : any = null

  buildings : any 

  constructor(public playerService: PlayerService, private router: Router) { }


  ngOnInit() {


    console.log("BuildinglistComponent");
    
    this.provinceName = localStorage.getItem("provinceName")
    this.provinceId = localStorage.getItem("provinceId")


    console.log(this.provinceId, "this.provinceId");
    



/* this.playerService.getBuildingsFromProvence(this.provinceId, (data : any)=>{

this.buildings = data

console.log(this.buildings, "this.buildings");


})
 */


this.playerService.getBuildingsFromProvence(this.provinceId, (data : Building[])=>{

  
  this.buildings = data

  console.log(data, "data ");
  
  
  //console.log(this.buildings, "this.buildings");
  
  
  })

  
  this.playerService.getRessources()

  }

}
