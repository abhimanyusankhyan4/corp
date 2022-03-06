import { Component ,OnInit} from '@angular/core';

import { CropDataService } from './crop-data.service'
import * as L from "leaflet";
// import { LayerGroup, tileLayer ,latLng} from "leaflet"; 
import {featureGroup, latLng, tileLayer, polygon, marker, Icon, LatLngBounds} from 'leaflet';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  iconUrl = "https://decisionfarm.ca/assets/images/marker-icon-2x.png";

  options = { };
  title = 'agritrack';
  crops:any
  checkMap=0
  latlong1: any =[]
  latlong2: any =[]
  latlong3: any =[]
  latlong4: any =[]
  urlPara = '';
  constructor(private cropData:CropDataService,private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      let id = params['lot']; 
    this.cropData.crops(id).subscribe((data)=>{
      console.log('data', data);
      this.crops = data;
      this.options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom: 4,
        center: latLng(this.crops.packageSite.lon,this.crops.packageSite.lat)
    };
      this.latlong1 = [this.crops.seedSite.lon,this.crops.seedSite.lat]
     this.latlong2 = [this.crops.harvestSite.lon,this.crops.harvestSite.lat]
     this.latlong3 = [this.crops.packageSite.lon,this.crops.packageSite.lat]
     this.latlong4 = [this.crops.merchantSite.lon,this.crops.merchantSite.lat]

    this.checkMap =1;

     }) 
 
    })
  }

  ngOnInit() {

}

onMapReady(map:any) {
  
  const marker1 = marker(this.latlong1, {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'https://decisionfarm.ca/assets/images/marker-icon-2x.png',
     // shadowUrl: 'leaflet/marker-shadow.png'
    })
  });


 
  const marker2 = marker(this.latlong2, {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'https://decisionfarm.ca/assets/images/marker-icon-2x.png',
     // shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  const marker3 = marker(this.latlong3, {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'https://decisionfarm.ca/assets/images/marker-icon-2x.png',
     // shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  const marker4 = marker(this.latlong4, {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'https://decisionfarm.ca/assets/images/marker-icon-2x.png',
     // shadowUrl: 'leaflet/marker-shadow.png'
    })
  });


  const group = featureGroup([marker1, marker2,marker3,marker4]);

  group.addTo(map);
  map.fitBounds(group.getBounds());
}
}
