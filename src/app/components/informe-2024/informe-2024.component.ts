import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-informe-2024',
  standalone: true,
  imports: [],
  templateUrl: './informe-2024.component.html',
  styleUrl: './informe-2024.component.css'
})
export class Informe2024Component implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initImageCarousel();
      }, 200);
    }
  }

  private initImageCarousel(): void {
    const $carousel = $('.empresas-carousel');

    if ($carousel.hasClass('slick-initialized')) {
      $carousel.slick('unslick');
    }

    $carousel.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      infinite: true,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });
  }
}
