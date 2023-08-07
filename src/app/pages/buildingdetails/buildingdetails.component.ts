import { Component , OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-buildingdetails',
  templateUrl: './buildingdetails.component.html',
  styleUrls: ['./buildingdetails.component.scss']
})
export class BuildingdetailsComponent implements OnInit {

  provinceName : any =null
  provinceId : any = null

  building : any = null

  id : any

  constructor(private playerService: PlayerService,  private route: ActivatedRoute, private router: Router) { }


  

  ngOnInit() {

    this.provinceName = localStorage.getItem("provinceName")
    this.provinceId = localStorage.getItem("provinceId")

    this.id = this.route.snapshot.paramMap.get('id')!;


    this.playerService.getBuildingDetail(this.id,(data :any)=>{



      this.building=data


    })
    
  //  this.playerService.getBuildingDetail(1)


  }


  addTroop()
  {

    this.building.troop++
  }


  goToBuildingList()
  {

    this.router.navigate(['/buildinglist'])

  }

  saveTroop()
  {
if(this.checking())
{

this.playerService.updateBuildingTroop(this.id,  this.building.troop, (data:any)=>{})

}

  }


  checking()
  {

    return true
  }
}//
