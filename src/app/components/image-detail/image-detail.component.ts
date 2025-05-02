import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-image-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit, AfterViewInit {
  imageId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.imageId = +id;
    } else {
      console.error('ID de imagen no encontrado');
      this.router.navigate(['/image-detail/1']);
    }
  }

  ngAfterViewInit(): void {
    // Inicializar carruseles después de que la vista esté completamente cargada
    setTimeout(() => {
      this.initializeCarousels();
    }, 0);
  }

  // Extraemos la inicialización de carruseles a un método separado para mejor organización
  initializeCarousels(): void {
    // Destruir instancias existentes antes de reinicializar
    if ($('.carousel-principal').hasClass('slick-initialized')) {
      $('.carousel-principal').slick('unslick');
    }
    if ($('.empresas-carousel').hasClass('slick-initialized')) {
      $('.empresas-carousel').slick('unslick');
    }

    // Carrusel principal con 3 imágenes en pantallas grandes, 2 en tablets, 1 en móviles
    $('.carousel-principal').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992, // Tablets
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 768, // Móviles
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
            arrows: false
          }
        }
      ]
    });

    // Carrusel de logos de empresas
    $('.empresas-carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      centerMode: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 992, // Tablets
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768, // Móviles grandes
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576, // Móviles pequeños
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }

  // Método para navegar al inicio
  navigateToInicio(): void {
    this.router.navigate(['/nueva-pagina']);
  }
}