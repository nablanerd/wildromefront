import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

import { Router } from "@angular/router"

@Component({
  selector: 'app-buildingbuild',
  templateUrl: './buildingbuild.component.html',
  styleUrls: ['./buildingbuild.component.scss']
})
export class BuildingbuildComponent {

  provinceName: any
  provinceId: any

  buildings: any

  building: any

  selectedOption: any

  canBuild: boolean = false

  errorMessage: any = ""

/*   wood = 0;
  water = 0;
  food = 0;
  money = 0; */

  constructor(public playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    this.provinceName = localStorage.getItem("provinceName")
    this.provinceId = localStorage.getItem("provinceId")

    this.playerService.getBuildingsAvaible((data: any) => {

      this.buildings = data

      console.log(this.buildings, "this.buildings");

      if (this.buildings.length != 0)
        this.canBuild = true

    })


   /*  this.playerService.getPlayerInfo((data: any) => {


      this.wood = data.wood
      this.water = data.water
      this.food = data.food
      this.money = data.money



    }) */

    this.playerService.getRessources()


  }


  onSelect(type: any) {

    this.building = this.buildings.filter((e: any) => e.type === type)[0]

  }

  onBuild() {


    
    console.log(this.buildings, "this.buildings ");

    console.log(this.building.id, "this.building.id");
    console.log(this.provinceId, "provinceId");

    if (this.checking()) {

      if (this.canBuild) {

        this.playerService.buildingInProvince(this.building.id, this.provinceId, (data: any) => {

          console.log(data);



          if (data?.type && data?.type == "ko") {

            this.errorMessage = data.message


          }
          else {
            this.playerService.getRessources()

            this.router.navigate(['/buildinglist'])
          }


        });

      }

    }
    else {

      this.errorMessage = "pas assez de ressource pour construire building"


    }


  }




  goToBuildingList() {

    this.router.navigate(['/buildinglist'])

  }



  checking() {

    return (
      this.playerService.getWood() > this.building.wood &&
      this.playerService.getWater() > this.building.water &&
      this.playerService.getFood() > this.building.food &&
      this.playerService.getMoney() > this.building.money

    )
  }


}//
