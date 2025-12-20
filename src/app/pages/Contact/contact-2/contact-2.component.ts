import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
declare var window: any;

delete (L.Icon.Default.prototype as any)._getIconUrl;

@Component({
  selector: 'app-contact-2',
  templateUrl: './contact-2.component.html',
  styleUrls: ['./contact-2.component.css']
})
export class Contact2Component implements AfterViewInit {

  ngAfterViewInit(): void {
      const map = L.map('map_canvas', {
            // center: [19.0760, 72.8777], // Mumbai
            center: [19.1176, 72.9060], // 📍 Powai, Mumbai
            zoom: 12,
            scrollWheelZoom: false
          });
      
          L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution: ''
          }).addTo(map);
      
          // L.marker([19.0760, 72.8777])
          //   .addTo(map)
          //   .bindPopup('<b>Mumbai</b><br>India')
          //   .openPopup();
      
          L.marker([19.0760, 72.8777])
            .addTo(map)
            .bindPopup('Pawai, Mumbai')
            .openPopup();
  }

}
