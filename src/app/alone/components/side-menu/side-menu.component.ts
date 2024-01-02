import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})


export class SideMenuComponent {



  public menuItems: MenuItem[] = [
    { route: '/maps/map/fullscreen', name: 'Pantalla Completa' },
    { route: '/maps/map/zoom-range', name: 'Zoom Range' },
    { route: '/maps/map/markers', name: 'Marcadores' },
    { route: '/maps/map/properties', name: 'Casas' },
    { route: '/alone', name: 'Alone Page' }

  ]



}
