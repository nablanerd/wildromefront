import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-battlewin',
  templateUrl: './battlewin.component.html',
  styleUrls: ['./battlewin.component.scss']
})
export class BattlewinComponent implements OnInit{

  constructor(public playerService : PlayerService) { }


  ngOnInit() {
    this.playerService.getRessources()

  }
}
