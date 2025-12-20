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
        pause: 8000,
        speed: 1000,
        pager: false,
        controls: true,
        prevText:'<i class="fa fa-angle-left square BGprime"></i>',
        nextText:'<i class="fa fa-angle-right square BGprime"></i>'
      });
    }, 0);
  }
}
