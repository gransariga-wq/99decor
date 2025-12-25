import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-services-single1',
  templateUrl: './services-single1.component.html',
  styleUrls: ['./services-single1.component.css']
})
export class ServicesSingle1Component implements AfterViewInit {

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
