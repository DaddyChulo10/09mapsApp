import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef


  @Input() lngLatsss?: [number, number]


  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement) throw "Map div not fount"
    if (!this.lngLatsss) throw "LNG can't be null"

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLatsss,// starting position [lng, lat]
      zoom: 17, // starting zoom
      interactive: false
    });

    new Marker().setLngLat(this.lngLatsss).addTo(map)


  }








}
