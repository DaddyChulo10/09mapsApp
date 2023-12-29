import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {


  @ViewChild('map') divMap?: ElementRef


  ngOnDestroy(): void {
    this.map?.remove()
  }

  public zoom: number = 13
  public map?: Map
  public curremtLngLat: LngLat = new LngLat(-98.1980229719331, 19.043656860057)


  ngAfterViewInit(): void {

    if (!this.divMap) throw 'Elemento HTML no fue Encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.curremtLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom

    });


    // const marker = new Marker({

    //   })
    //   .setLngLat(this.curremtLngLat)
    //   .addTo(this.map)
  }


  createMarker() {
    // this.addMarker()
  }


  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return

    const marker = new Marker({
      color: color,
      draggable: true
    })
      .setLngLat(lngLat)
      .addTo(this.map)
  }


}
