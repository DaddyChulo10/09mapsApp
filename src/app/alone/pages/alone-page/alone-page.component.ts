import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from 'src/app/alone/components/side-menu/side-menu.component';
// import { CommonModule } from '@angular/common';

@Component({
    // selector: 'app-alone-page',
    standalone: true,
    templateUrl: './alone-page.component.html',
    styleUrls: ['./alone-page.component.css'],
    imports: [CounterAloneComponent, CommonModule, SideMenuComponent, ]
})
export class AlonePageComponent {

}
