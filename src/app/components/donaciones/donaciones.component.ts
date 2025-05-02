import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-donaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements AfterViewInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Esperamos un poco para asegurar que el DOM esté completamente cargado
      setTimeout(() => {
        // Inicializar el primer carrusel (donaciones)
        this.initDonacionesCarousel();
        
        // Inicializar el segundo carrusel (empresas)
        this.initEmpresasCarousel();
      }, 200);
    }
  }
  
  private initDonacionesCarousel(): void {
    // Usamos un selector específico con la clase donaciones-carousel
    $('.donaciones-carousel').not('.slick-initialized').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } }
      ]
    });
  }
  
  private initEmpresasCarousel(): void {
    // Inicializar el carrusel de empresas
    $('.empresas-carousel').not('.slick-initialized').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev empresas-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next empresas-next"><i class="fa-solid fa-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });
    
    // Forzar visibilidad de las flechas
    setTimeout(() => {
      const prevArrow = document.querySelector('.empresas-prev');
      const nextArrow = document.querySelector('.empresas-next');
      
      if (prevArrow && nextArrow) {
        // Añadir estilos inline para asegurar visibilidad
        (prevArrow as HTMLElement).style.display = 'block';
        (nextArrow as HTMLElement).style.display = 'block';
        (prevArrow as HTMLElement).style.zIndex = '9999';
        (nextArrow as HTMLElement).style.zIndex = '9999';
        (prevArrow as HTMLElement).style.opacity = '1';
        (nextArrow as HTMLElement).style.opacity = '1';
        
        // Mover las flechas al DOM si es necesario
        const empresasCarousel = document.querySelector('.empresas-carousel');
        if (empresasCarousel) {
          if (!document.body.contains(prevArrow)) {
            empresasCarousel.appendChild(prevArrow);
          }
          if (!document.body.contains(nextArrow)) {
            empresasCarousel.appendChild(nextArrow);
          }
        }
      }
    }, 1000);
  }
}