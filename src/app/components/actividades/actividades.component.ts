import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements AfterViewInit {
  actividadSeleccionada: string = 'Educativas';

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

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

  seleccionarActividad(actividad: string) {
    this.actividadSeleccionada = actividad;
    console.log(`Seleccionaste: ${actividad}`);
  }

  verMas(idActividad: number) {
    console.log(`Navegando a detalles de la actividad con ID: ${idActividad}`);
    this.router.navigate(['/detalle-actividad', idActividad]); // Navega usando el ID
  }

  navegarA(ruta: string): void {
    console.log(`Navegando a: ${ruta}`);
    this.router.navigate([ruta]);
  }
}