import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  marker!: L.Marker;
  popupContent = 'Marker Lokasi';

  constructor() {}
  ngOnInit() {

  }
  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.775007230205217, 110.37436856931711], 10);

    const baseLayers = {
      'OpenStreetMap': L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),
      'OpenTopoMap': L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
      }),
      'Thunderforest Outdoors': L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.thunderforest.com/maps/outdoors/">Thunderforest</a> contributors'
      }),
      'Google Maps': L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: 'googleMap'
      }),
      'Esri World Imagery': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }),
      'CartoDB': L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      })
    };
    baseLayers['OpenStreetMap'].addTo(this.map);

    L.control.layers(baseLayers).addTo(this.map);

    // this.marker = L.marker([-7.775007230205217, 110.37436856931711]).addTo(this.map);
    // this.marker.bindPopup(this.popupContent).openPopup();
    // this.marker.bindPopup(this.popupContent);
    const markerIcon = L.icon({
      iconUrl:'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25,41],
      iconAnchor: [12,41],
    })

    const marker = L.marker([-7.775007230205217, 110.37436856931711], {
      icon: markerIcon
      // riseOnHover: true,
    }).addTo(this.map);
    marker.bindPopup(this.popupContent);
  }



}


    // const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '%copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // });

    // const mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN', {
    //   attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a>',
    //   maxZoom: 18,
    //   id: 'mapbox/streets-v11',
    //   tileSize: 512,
    //   zoomOffset: -1,
    // });

    // const googleMap = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    //   maxZoom: 20,
    //   attribution: 'Google Maps',
    // });

    // Base Map Layer Control
    // const baseMaps = {
    //   'OpenStreetMap': openStreetMap,
    //   'Mapbox': mapbox,
    //   'Google Maps': googleMap,
    // };

    // L.control.layers(baseMaps).addTo(this.map);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '%copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);


