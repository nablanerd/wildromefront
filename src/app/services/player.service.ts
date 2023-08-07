import { Injectable } from '@angular/core';

import {Router} from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerInfo: any;

  constructor( private router: Router) { }


  getPlayerInfo(cb : any ) {
    const token = localStorage.getItem('token');

    if (token) {
      fetch('http://localhost:8080/auth/info', {
        method: 'GET',
        headers: {
          'x-token': token
        }
      })
      .then(response => response.json())
      .then(data => {

       // playerInfo = data.data;

        //console.log(playerInfo, "playerInfo");
        
        cb(data.data)
      })
      .catch(error => {
        console.error('Error:', error);

      });
    } else {
      // Gérer le cas où le token n'est pas présent dans le localStorage
     // console.error('Token not found in localStorage.');

     this.router.navigate(['/login'])

    }
  }

  updateRessource(wood : number, water : number, food : number, money : number, cb : any)
  {

    const token = localStorage.getItem('token');

    if (token) {
      fetch('http://localhost:8080/player', {
        method: 'PUT',

        headers: {
          'x-token': token,
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          wood: wood,
          water:water,
          food: food,
          money: money
      })
      })
      .then(response => response.json())
      .then(data => {
        
        cb(data.data)
      })
      .catch(error => {
        console.error('Error:', error);

      });
    } else {
      // Gérer le cas où le token n'est pas présent dans le localStorage
      console.error('Token not found in localStorage.');
    }


  }



  getAllBuildings(cb :  any)
  {

    fetch('http://localhost:8080/buildingsall', {
      method: 'GET',
   
    })
    .then(response => response.json())
    .then(body => {
      
      cb(body.data)
    })
    .catch(error => {
      console.error('Error:', error);

    });
  }


  buildingInProvince(buildingId : any, provinceId : any, cb : any)
  {

    fetch(`http://localhost:8080/updatebuildingwithprovince/${buildingId}/${provinceId}`, {
      method: 'PUT',
   
    })
    .then(response => response.json())
    .then(body => {
      
      cb(body.data)

    })
    .catch(error => {
      console.error('Error:', error);

    });

  }


  getBuildingsAvaible(cb:any)
  {

    fetch("http://localhost:8080/buildingsavaible", {
      method: 'GET',
   
    })
    .then(response => response.json())
    .then(body => {
      
      cb(body.data)

    })
    .catch(error => {
      console.error('Error:', error);

    });


    
  }

  getBuildingsFromProvence(idProvence : any, cb : any)
  {

console.log(idProvence, " getBuildingsFromProvence idProvence");


    fetch(`http://localhost:8080/getbuildingsfromprovence/${idProvence}`, {
      method: 'GET',
   
    })
    .then(response => response.json())
    .then(body => {
      
      cb(body.data)

    })
    .catch(error => {
      console.error('Error:', error);

    });


    


  }


  getBuildingDetail(idBuilding:any, cb:any)
  {

    fetch(`http://localhost:8080/building/${idBuilding}`, {
      method: 'GET',
   
    })
    .then(response => response.json())
    .then(body => {
      
      cb(body.data)

    })
    .catch(error => {
      console.error('Error:', error);

    });

  }



  updateBuildingTroop(idBuilding : any, troop :any, cb : any)
  {

    fetch(`http://localhost:8080/buildingtroop/${idBuilding}`, {
      method: 'PUT',

      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        troop: troop,
    })
    })
    .then(response => response.json())
    .then(data => {
      
      cb(data.data)
    })
    .catch(error => {
      console.error('Error:', error);

    });
  }
  }//


