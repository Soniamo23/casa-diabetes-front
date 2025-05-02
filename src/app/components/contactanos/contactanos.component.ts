import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements AfterViewInit, OnDestroy {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: object) {
    this.contactForm = this.fb.group({
      asunto: [''],
      telefono: [''],
      correo: [''],
      nombre: [''],
      apellido: [''],
      mensaje: ['']
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initImageCarousel();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.destroyCarousel();
    }
  }

  private initImageCarousel(): void {
    setTimeout(() => {
      const $carousel = $('.empresas-carousel');
      
      if ($carousel.length > 0) {
        // Destruir el carrusel si ya está inicializado
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }
        
        // Inicializar el carrusel con las opciones
        $carousel.slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          dots: true,
          infinite: true,
          prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
          responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } }
          ]
        });
      }
    }, 300); // Reducido a 300ms para mejorar la velocidad de carga
  }

  private destroyCarousel(): void {
    const $carousel = $('.empresas-carousel');
    if ($carousel.length > 0 && $carousel.hasClass('slick-initialized')) {
      $carousel.slick('unslick');
    }
  }

  enviarFormulario() {
    console.log('Datos enviados:', this.contactForm.value);
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, llamar a un servicio que haga una petición HTTP
  }
}