import { Component , OnInit} from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-battlelose',
  templateUrl: './battlelose.component.html',
  styleUrls: ['./battlelose.component.scss']
})
export class BattleloseComponent implements OnInit {

  constructor(public playerService : PlayerService) { }


  ngOnInit() {
    this.playerService.getRessources()

  }


}
