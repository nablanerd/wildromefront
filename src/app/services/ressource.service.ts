import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  n : number = 0

  constructor() { }


  update()
  {
    this.n ++
  }
}
