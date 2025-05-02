import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// IMPORTANTE: Necesitas importar jQuery
declare var $: any;

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements AfterViewInit {
  categoriasSeleccionadas: string[] = [];
  precioMin: number = 0;
  precioMax: number = 40;
  busqueda: string = '';
  terminoBusqueda: string = '';

  paginaActual: number = 1;

  toggleCategoria(categoria: string) {
    const index = this.categoriasSeleccionadas.indexOf(categoria);
    if (index > -1) {
      this.categoriasSeleccionadas.splice(index, 1);
    } else {
      this.categoriasSeleccionadas.push(categoria);
    }
  }

  cumpleFiltro(categoria: string, precio: number, nombre: string): boolean {
    const enCategoria = this.categoriasSeleccionadas.length === 0 ||
    this.categoriasSeleccionadas.includes(categoria);
// ahora comprobamos que el precio sea >= precioMin
const enPrecio = precio >= this.precioMin;
const coincideBusqueda = this.busqueda === '' ||
        nombre.toLowerCase().includes(this.busqueda.toLowerCase());
return enCategoria && enPrecio && coincideBusqueda;
}
reinicializarFiltros() {
  this.terminoBusqueda = '';
  this.precioMin = 0;
  this.precioMax = 40;
  this.categoriasSeleccionadas = [];
}

  cambiarPagina(pagina: number) {
    if (pagina > 0) {
      this.paginaActual = pagina;
    }
  }

  ngAfterViewInit(): void {
    this.initImageCarousel();
  }

  private initImageCarousel(): void {
    const $carousel = $('.empresas-carousel');

    if ($carousel.length > 0) {
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
}
