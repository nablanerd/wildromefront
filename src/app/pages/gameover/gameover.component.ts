import { Component } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss']
})
export class GameoverComponent {

  constructor(public playerService : PlayerService) { }


}
