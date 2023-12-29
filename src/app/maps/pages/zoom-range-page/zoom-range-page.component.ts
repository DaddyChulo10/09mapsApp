import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';


@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {



  @ViewChild('map') divMap?: ElementRef


  ngOnDestroy(): void {
    this.map?.remove()
  }

  public zoom: number = 10
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

    this.mapListeners()
  }

  mapListeners() {
    if (!this.map) throw 'Mapa no Inicializado'

    this.map.on('zoom', (evento) => {
      this.zoom = this.map!.getZoom()
    })

    this.map.on('zoomend', (evento) => {

      if (this.map!.getZoom() < 18) return
      this.map!.zoomTo(18)
    })


    this.map.on('move', (evento) => {
      this.curremtLngLat = this.map!.getCenter()
    })
  }

  zoomIn() {
    this.map?.zoomIn()
  }

  zoomOut() {
    this.map?.zoomOut()

  }

  zoomChanged(value: string) {
    this.zoom = Number(value)
    this.map?.zoomTo(this.zoom)
  }

}
