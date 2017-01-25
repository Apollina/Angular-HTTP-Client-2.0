import { Response } from '@angular/http';
import { DigitransitService } from './../services/digitransit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})
export class ListRouteComponent implements OnInit {

  public routes: any = [];

  constructor(private digitTransitService: DigitransitService) { }

  ngOnInit() {
    this.digitTransitService.getRoutes("Gransinmäki").subscribe(
      (res) => {
        this.routes = res.data.stops;
        console.log(this.routes);
      }
    )
  }

}
