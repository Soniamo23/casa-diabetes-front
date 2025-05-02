import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { isPlatformBrowser } from '@angular/common'; // Importa isPlatformBrowser
declare var $: any; // Asegúrate de que jQuery esté disponible

@Component({
  selector: 'app-detalle-actividad',
  standalone: true, // Asegúrate de que esto esté presente
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.scss']
})
export class DetalleActividadComponent implements OnInit, AfterViewInit {
  actividad: number | null = null;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.actividad = id ? +id : null; // Convertir a número si no es null
      console.log(`Actividad seleccionada: ${this.actividad}`);
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initImageCarousel();
      }, 200);
    }
  }

  private initImageCarousel(): void {
    const $carousel = $('.empresas-carousel'); // Asegúrate de que esto apunte a tu carrusel

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