import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})


export class SideMenuComponent {



  public menuItems: MenuItem[] = [
    { route: '/maps/map/fullscreen', name: 'FullScreen' },
    { route: '/maps/map/zoom-range', name: 'Zoom Range' },
    { route: '/maps/map/markers', name: 'Markers' },
    { route: '/maps/map/properties', name: 'Properties' },

  ]



}
