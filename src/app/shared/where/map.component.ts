import { Component } from '@angular/core';

import { latLng, LatLng, tileLayer, marker, icon, Layer } from 'leaflet';
import { url } from 'inspector';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
	LAYER_WATER = {
		id: 'watercolor',
		name: 'Watercolor',
		enabled: true,
		layer: tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
			maxZoom: 18,
			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
		})
	};

	LAYER_TONER = {
		id: 'toner',
		name: 'Toner',
		enabled: true,
		layer: tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
		})
	};	

	location_marker = marker([ 43.36157258349801, -5.850718276979933 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  });

	//bindings
	layersControlOptions = { position: 'bottomright' };
	baseLayers = {
		'Watercolor': this.LAYER_WATER.layer,
		'Toner': this.LAYER_TONER.layer
	};
	markers : Layer[] = [ this.location_marker ];
	options = {
		zoom: 15,
		center: latLng(43.36157258349801, -5.850718276979933)
	};


}