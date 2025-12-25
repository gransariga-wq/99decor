import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gallery-full-widht',
  templateUrl: './gallery-full-widht.component.html',
  styleUrls: ['./gallery-full-widht.component.css']
})
export class GalleryFullWidhtComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  setTimeout(() => {
    const $grid = $('.grid').isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

    $('.filter-button-group').on('click', 'button', (e: any) => {
      const filterValue = $(e.currentTarget).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $('.filter-button-group button').removeClass('active');
      $(e.currentTarget).addClass('active');
    });
    }, 300);
  }

}
