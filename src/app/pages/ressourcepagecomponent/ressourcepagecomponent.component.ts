import { Component , OnInit} from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-ressource-page',
  templateUrl: './ressourcepagecomponent.component.html',
  styleUrls: ['./ressourcepagecomponent.component.scss']
})
export class RessourcePageComponent implements OnInit{
  
  playerInfo: any;

 wood = 0;
  water = 0;
  food = 0;
  money = 0;

  constructor(private playerservice : PlayerService ){}

  ngOnInit() {

    this.playerservice.getPlayerInfo((data : any)=>{

      console.log(data, "data");

this.playerInfo = data;

this.wood = data.wood
this.water = data.water
this.food = data.food
this.money = data.money

    });

  
  }

  addWood()
  {
    this.wood++
  }

  addWater()
  {
    this.water++
  }

  addFood()
  {
    this.food++
  }

  addMoney()
  {
    this.money++
  }


  updateRessource()
  {


    this.playerservice.updateRessource(

      this.wood ,
this.water,
this.food ,
this.money ,

      (data : any)=>{console.log(data)
    })



  }

}
