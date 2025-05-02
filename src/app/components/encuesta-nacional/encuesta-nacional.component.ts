import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

// Declaración para jQuery
declare const $: any;

@Component({
  selector: 'app-encuesta-nacional',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './encuesta-nacional.component.html',
  styleUrls: ['./encuesta-nacional.component.css']
})
export class EncuestaNacionalComponent implements OnInit, AfterViewInit {
  selectedId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.selectedId = id ? +id : undefined;
    });
  }

  ngAfterViewInit(): void {
    this.initImageCarousel();
  }

  goTo(id: number): void {
    this.router.navigate(['/encuesta-nacional', id]);
  }

  goBack(): void {
    this.router.navigate(['/encuesta-nacional']);
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
