import { Response } from '@angular/http';
import { DigitransitService } from './../services/digitransit.service';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit {
  public medias: any = [];
  public routes: any = [];
  constructor(private mediaService : MediaService,
              private digitTransitService: DigitransitService) { }

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe(
      (resp) => {
        this.medias = resp.json();
        console.log(this.medias);
      }
    );

  }

}
