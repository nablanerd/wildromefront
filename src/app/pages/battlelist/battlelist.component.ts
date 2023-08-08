import { Component , OnInit} from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-battlelist',
  templateUrl: './battlelist.component.html',
  styleUrls: ['./battlelist.component.scss']
})
export class BattlelistComponent  implements OnInit{


  constructor(public playerService : PlayerService ){}


  ngOnInit() {

    this.playerService.getRessources()

  }

}
