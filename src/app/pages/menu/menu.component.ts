import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

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
