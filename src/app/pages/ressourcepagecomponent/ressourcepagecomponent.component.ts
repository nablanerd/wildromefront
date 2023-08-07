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
/* 
 wood = 0;
  water = 0;
  food = 0;
  money = 0; */

  constructor(public playerService : PlayerService ){}

  ngOnInit() {

/*     this.playerService.getPlayerInfo((data : any)=>{

      console.log(data, "data");

this.playerInfo = data;

this.wood = data.wood
this.water = data.water
this.food = data.food
this.money = data.money

    });
 */
  
    this.playerService.getRessources()

  }
/* 
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
 */

  updateRessource()
  {


    this.playerService.updateRessource(

this.playerService.getWood() ,
this.playerService.getWater(),
this.playerService.getFood() ,
this.playerService.getMoney(),

      (data : any)=>{console.log(data)
    })



  }

}
