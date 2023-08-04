import { Component , OnInit} from '@angular/core';
import { RessourceService } from 'src/app/services/ressource.service';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {

  wood = 0;
  water = 0;
  food = 0;
  money = 0;


  constructor(private playerservice : PlayerService ){}

  ngOnInit() {

    this.playerservice.getPlayerInfo((data : any)=>{

      console.log(data, "data");

this.wood = data.wood
this.water = data.water
this.food = data.food
this.money = data.money

    });

  
  }
  
  
}
