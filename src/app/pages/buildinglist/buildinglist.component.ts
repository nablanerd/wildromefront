import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrls: ['./buildinglist.component.scss']
})
export class BuildinglistComponent implements OnInit {
  provinceName : any =null


  ngOnInit() {
    this.provinceName = localStorage.getItem("provinceName")

  }
}
