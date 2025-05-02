import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        // Inicializar el carrusel de actividades
        this.initActivitiesCarousel();

        // Inicializar el carrusel de empresas
        this.initImageCarousel();
      }, 200);
    }
  }

  private initActivitiesCarousel(): void {
    const activitiesCarousel = document.querySelector('.activities-carousel');
    if (activitiesCarousel) {
      $(`.activities-carousel`).not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
      });
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
      dots: false,
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });
  }

  // Método para redirigir a la página de registro
  irARegistro() {
    this.router.navigate(['/registro']);
  }

  // Método para manejar el clic en la imagen
  onImageClick() {
    console.log('Imagen clickeada');
    this.router.navigate(['/nueva-pagina']);
  }
}