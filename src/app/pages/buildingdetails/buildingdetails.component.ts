import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buildingdetails',
  templateUrl: './buildingdetails.component.html',
  styleUrls: ['./buildingdetails.component.scss']
})
export class BuildingdetailsComponent implements OnInit {



  provinceName: any = null
  provinceId: any = null

  building: any = null

  id: any

  errorMessage: any = ""

  /* wood  = 0;
  water = 0;
  food = 0;
  money = 0; */

  constructor(public playerService: PlayerService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

    this.provinceName = localStorage.getItem("provinceName")
    this.provinceId = localStorage.getItem("provinceId")

    this.id = this.route.snapshot.paramMap.get('id')!;


    this.playerService.getBuildingDetail(this.id, (data: any) => {

      this.building = data


    })

    //  this.playerService.getBuildingDetail(1)


   /*  this.playerService.getPlayerInfo((data: any) => {


      this.wood = parseInt(data.wood)
      this.water = parseInt(data.water)
      this.food = parseInt(data.food)
      this.money = parseInt(data.money)



    })
 */


  }


  addTroop() {

    this.building.troop++
  }


  goToBuildingList() {

    this.router.navigate(['/buildinglist'])

  }

  saveTroop() {

//this.playerService.addCount()

    if (this.checking()) {

      this.playerService.updateBuildingTroop(this.id, this.building.troop, (data: any) => {


        if (data?.type && data?.type == "ko") {

          this.errorMessage = data.message


        }
        else{
          this.playerService.getRessources()


        }



      })

    }

    else {


      this.errorMessage = "buildingtroop pas assez de ressource pour recruter"
    }

  }


  checking() {
    
    return (
      this.playerService.getWood() > (this.multy(this.building.troopWood , this.building.troop)) &&
      this.playerService.getWater() > (this.multy(this.building.troopWater , this.building.troop)) &&
      this.playerService.getFood() > (this.multy(this.building.troopFood , this.building.troop)) &&
      this.playerService.getMoney() > (this.multy(this.building.troopMoney , this.building.troop)  )
      )
  }


  multy(a : any , b : any){


    return parseInt(a) * parseInt(b)
  }
}//
