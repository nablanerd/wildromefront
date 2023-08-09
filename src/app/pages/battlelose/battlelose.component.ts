import { Component , OnInit} from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

import { Router } from "@angular/router"

@Component({
  selector: 'app-battlelose',
  templateUrl: './battlelose.component.html',
  styleUrls: ['./battlelose.component.scss']
})
export class BattleloseComponent implements OnInit {

  constructor(public playerService : PlayerService, private router: Router) { }


  ngOnInit() {
    this.playerService.getRessources()


    const timer = setInterval(()=>{

this.playerService.getPoints((data:any)=>{

  console.log("getPoints", data);

  if(data?.points === 0)
  {

    clearInterval(timer)

    this.playerService.setIsGameOver(true)

    this.router.navigate(['/gameover'])


  }


  
})


    }, 1000)

  }


}
