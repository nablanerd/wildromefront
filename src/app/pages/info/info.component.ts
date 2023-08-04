import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})


export class InfoComponent implements OnInit{
  playerInfo: any;

  constructor() { }

  ngOnInit() {
    console.log("**** 1");
    this.getPlayerInfo();
    console.log("**** 2");
  }

  getPlayerInfo() {
    const token = localStorage.getItem('token');

    if (token) {
      fetch('http://localhost:8080/auth/info', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token
        }
      })
      .then(response => response.json())
      .then(data => {
        this.playerInfo = data.data;
        console.log("**** 3");
        console.log(this.playerInfo);
        console.log("**** 4");
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
  
  

