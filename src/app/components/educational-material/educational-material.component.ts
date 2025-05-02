import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var $: any; // Declarar jQuery

@Component({
  selector: 'app-educational-material',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './educational-material.component.html',
  styleUrls: ['./educational-material.component.css']
})
export class EducationalMaterialComponent implements AfterViewInit {
  
  contentTypes = [
    { type: 'game', icon: 'fa-gamepad', label: 'Juegos' },
    { type: 'video', icon: 'fa-video', label: 'Videos' },
    { type: 'flipbook', icon: 'fa-book', label: 'Flipbooks' },
    { type: 'downloadable', icon: 'fa-download', label: 'Descargables' },
    { type: 'podcast', icon: 'fa-podcast', label: 'Podcast' }
  ];

  // Corrige la inicialización añadiendo el modificador "public"
  public activeCategory: string | null = 'game';

  ngAfterViewInit(): void {
    this.initImageCarousel();
  }

  filterContent(category: string): void {
    // Corregir esta línea que causa el error
    this.activeCategory = this.activeCategory === category ? null : category;
  }

  isActiveCategory(category: string): boolean {
    return this.activeCategory === category;
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

  // Función para manejar el clic en las tarjetas
  showEmoji(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const emoji = card.querySelector('.emoji') as HTMLElement;
    
    // Mostrar el emoji
    if (emoji) {
      emoji.style.display = 'block';
      
      // Ocultar el emoji después de 2 segundos
      setTimeout(() => {
        emoji.style.display = 'none';
      }, 2000);
    }
  }
}