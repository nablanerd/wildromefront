import { Component , OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-walloffame',
  templateUrl: './walloffame.component.html',
  styleUrls: ['./walloffame.component.scss']
})
export class WalloffameComponent implements OnInit {

  constructor(public playerService : PlayerService) { }



  ngOnInit() {
    this.playerService.getRessources()

  }

}
