import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('#owl-recent-project').owlCarousel({
        items: 3,
        navigation: true,
        pagination: true,
        autoPlay: true,
        stopOnHover: true,
        responsive: true,
        itemsDesktop: [1199, 4],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
      });
    }, 100);
  }

}
