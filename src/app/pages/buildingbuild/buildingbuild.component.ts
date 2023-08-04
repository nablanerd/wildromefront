import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-buildingbuild',
  templateUrl: './buildingbuild.component.html',
  styleUrls: ['./buildingbuild.component.scss']
})
export class BuildingbuildComponent {

  provinceName : any
  provinceID : any

  buildings : any

  building : any

  selectedOption : any

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.provinceName = localStorage.getItem("provinceName")
    this.provinceID = localStorage.getItem("provinceID")

    this.playerService.getAllBuildings((data:any)=>{

      this.buildings = data

      console.log(this.buildings, "this.buildings");

    })



  }


  onSelect(type : any)
  {

this.building = this.buildings.filter((e : any) => e.type === type)[0]

  }
  
  onBuild()
  {

console.log(this.building.id, "this.building.id");
console.log(this.provinceID, "provinceID");

const  removeValue= (value : any, index : any, arr : any) =>{
  // If the value at the current array index matches the specified value (2)
  if (value.type !== this.building.type) {
  // Removes the value from the original array
      arr.splice(index, 1);
      return true;
  }
  return false;
}

this.buildings = this.buildings.filter((e:any)=> e.type !== this.building.type)



  }
}
