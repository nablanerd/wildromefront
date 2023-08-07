import { Component , OnInit } from '@angular/core';

import {Router} from "@angular/router"


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private router: Router) { }


  ngOnInit() {



    this.logOut()

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

        localStorage.clear()

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

}


  
