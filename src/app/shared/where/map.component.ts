import { Component } from '@angular/core';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  // google maps zoom level
  zoom: number = 13;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
}