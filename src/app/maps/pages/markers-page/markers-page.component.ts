import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface PlainMarker {
  color: string;
  lngLat: number[];
}
interface MarkerAndColor {
  color: string;
  marker: Marker;
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {


  @ViewChild('map') divMap?: ElementRef


  public markers: MarkerAndColor[] = []


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

    this.readFromLocalStorage()
  }


  createMarker() {

    if (!this.map) return

    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter()
    this.addMarker(lngLat, color)

  }


  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return

    const marker = new Marker({
      color: color,
      draggable: true
    })
      .setLngLat(lngLat)
      .addTo(this.map)

    this.markers.push({ color: color, marker: marker })

    marker.on('dragend', () => this.saveToLocalStorage())
  }

  deleteMarker(i: number): void {
    this.markers[i].marker.remove()
    this.markers.splice(i, 1)

  }


  flyto(marker: Marker): void {
    this.map?.flyTo({
      zoom: 18,
      center: marker.getLngLat()
    })
  }


  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(({ color, marker }) => {
      return {
        color: color,
        lngLat: marker.getLngLat().toArray()
      }
    })

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers))
  }

  readFromLocalStorage() {

    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]'
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString) //!OJO!

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat
      const coords = new LngLat(lng, lat)

      this.addMarker(coords, color)
    });




  }


}
