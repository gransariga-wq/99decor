import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-services-single4',
  templateUrl: './services-single4.component.html',
  styleUrls: ['./services-single4.component.css']
})
export class ServicesSingle4Component implements AfterViewInit {

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
      $("a[data-rel^='prettyPhoto']").prettyPhoto();
    }, 0);
  }

}
