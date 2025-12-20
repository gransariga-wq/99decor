import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 8000,
        speed: 1000,
        pager: true,
        controls: true,
        prevText:'<i class="fa fa-angle-left square BGprime"></i>',
        nextText:'<i class="fa fa-angle-right square BGprime"></i>'
      });
    }, 0);
  }

}
