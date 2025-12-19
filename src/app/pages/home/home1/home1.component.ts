import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements AfterViewInit {
  constructor() {
    console.log('home1 loaded...');
    
  }

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
