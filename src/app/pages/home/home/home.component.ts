import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    constructor() { }

ngAfterViewInit(): void {
    setTimeout(() => {
      $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 5000,
        speed: 800,
        pager: true,
        controls: true
      });
    }, 0);
  }
    
}
