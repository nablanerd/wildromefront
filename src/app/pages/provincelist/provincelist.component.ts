import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincelist',
  templateUrl: './provincelist.component.html',
  styleUrls: ['./provincelist.component.scss']
})
export class ProvincelistComponent implements OnInit {

   provinces: any;

  ngOnInit() {

    const token = localStorage.getItem('token');

    if (token) {
    
      fetch('http://localhost:8080/provincesBID', {
        method: 'GET',
        headers: {
          'x-token': token
        }
      })
      .then(response => response.json())
      .then(data => {

        console.log(data.data, "data");
        
        this.provinces = data.data;
        

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
