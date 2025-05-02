import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-nueva-pagina',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nueva-pagina.component.html',
  styleUrls: ['./nueva-pagina.component.css']
})
export class NuevaPaginaComponent implements AfterViewInit {

  constructor(
    private viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.manageCarouselBasedOnScreen();
        this.setupNavLinkClick();
        $(window).on('resize', () => this.manageCarouselBasedOnScreen());
      }, 200);
    }
  }

  private manageCarouselBasedOnScreen(): void {
    const $carousel = $('.empresas-carousel');

    if ($(window).width() < 768) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick'); // Desactiva Slick si ya está activado
      }
    } else {
      if (!$carousel.hasClass('slick-initialized')) {
        this.initImageCarousel($carousel);
      }
    }
  }

  private initImageCarousel($carousel: any): void {
    $carousel.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: 'unslick' // Se desactiva en móviles
        }
      ]
    });
  }

  scrollToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  private setupNavLinkClick(): void {
    $('.navbar-collapse .nav-link').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }
}
