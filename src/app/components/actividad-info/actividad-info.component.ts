import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-actividad-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad-info.component.html',
  styleUrls: ['./actividad-info.component.css']
})
export class ActividadInfoComponent implements AfterViewInit {
  constructor(public route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: object) {}

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
