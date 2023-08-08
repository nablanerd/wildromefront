import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

import {Router} from "@angular/router"


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})


export class InfoComponent implements OnInit{
  playerInfo: any = null;

  constructor(public playerService : PlayerService, private router: Router) { }

  ngOnInit() {

    
    
      this.playerService.getPlayerInfo((foo : any)=>{

        console.log(foo, "foo");
  
  this.playerInfo = foo;
      });

    
    
      this.playerService.getRessources()

  }

  
}
  
  

