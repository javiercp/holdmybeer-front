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
  lat: number = 43.36157258349801;
  lng: number = -5.850718276979933;

  label: string = 'A';
  draggable: boolean = false;
}