import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {

  @Input()
  wood = 0;

  @Input()
  water = 0;

  @Input()
  food = 0;

  @Input()
  money = 0;

  //constructor(private playerservice : PlayerService ){}

  ngOnInit() {
/* 
    this.playerservice.getPlayerInfo((data : any)=>{

      console.log(data, "data");

this.wood = data.wood
this.water = data.water
this.food = data.food
this.money = data.money

    });

  
 */
  }
  
  
 
}
