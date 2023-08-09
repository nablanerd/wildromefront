import { Component, OnInit  } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

import { Router } from "@angular/router"


@Component({
  selector: 'app-battleattaque',
  templateUrl: './battleattaque.component.html',
  styleUrls: ['./battleattaque.component.scss']
})
export class BattleattaqueComponent implements OnInit{

  enemies : any

  current_enemy : any

  constructor(public playerService : PlayerService, private router: Router) { }

  flag = false

  ngOnInit() {
    this.playerService.getRessources()

    this.playerService.getOtherConnectedPlayers((data:any)=>
    {

      console.log("BattleattaqueComponent ngOnInit ", data );
      
      if(data?.length > 0)
      {
 this.enemies = data

    //this.enemies = data.map((e:any) => e.flag = false)

    this.enemies.forEach((e:any)=>{

      e.flag = false
      
      })

        
      }

      else 
      {
        this.enemies = []
      }
   

      
    
    })

  }

  selectEnemy(id:any)
  {

this.enemies.forEach((e:any)=>{

if(id === e.id)
{
  e.flag = true

  this.current_enemy = e
}

else
{
  e.flag = false
}


})



  }


  setBorder(enemy : any)
  {

    if(enemy.flag)
    return  'border : 1px solid yellow'
    else
    return 'border : 1px solid black'


  }

 /*  getStyle()
  {

if(this.flag)
return  'border : 1px solid yellow'
else
return 'border : 1px solid black'



  } */


  attack()
  {

    if(this.current_enemy)
    {

      //alert( this.current_enemy.id)

      //const current_player_id = 1

      this.playerService.attack(this.current_enemy.id, (data:any)=>{


        if(data?.iswinner)
        {

          this.router.navigate(['/battlewin'])

        }

        else
        {

          this.router.navigate(['/battlelose'])

        }



      })


    }



  }
}
