import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"

import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( public playerService : PlayerService, private router: Router) { }


  ngOnInit() {

if( this.playerService.getIsGameOver())
    this.router.navigate(['/gameover'])


    //this.router.navigate(['/walloffame'])

  }

  logOut() {
    
    const token = localStorage.getItem('token');

    if (token) {
      fetch('http://localhost:8080/auth/logout', {
        method: 'GET',
        headers: {
          'x-token': token
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data, 'DATA');
        localStorage.removeItem('token');


        this.router.navigate(['/login'])


      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      // Gérer le cas où le token n'est pas présent dans le localStorage
      console.error('Token not found in localStorage.');
    }
  }


  isLogged()
  {


  }
}
