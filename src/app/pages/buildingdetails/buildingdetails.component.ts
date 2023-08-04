import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-buildingdetails',
  templateUrl: './buildingdetails.component.html',
  styleUrls: ['./buildingdetails.component.scss']
})
export class BuildingdetailsComponent implements OnInit {

  provinceName : any =""


  ngOnInit() {

    this.provinceName = localStorage.getItem("provinceName")


  }

}
