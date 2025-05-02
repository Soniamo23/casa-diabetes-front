import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

declare var $: any; // Para usar jQuery

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.initTimelineAnimation();
  }

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

  private initTimelineAnimation() {
    const timeline = this.el.nativeElement.querySelector('.timeline');

    const updateTimeline = () => {
      if (!timeline) return;

      const totalHeight = timeline.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        100,
        ((scrollPosition + windowHeight - timeline.offsetTop) / totalHeight) * 100
      );
      this.renderer.setStyle(timeline, '--progress', `${progress}%`);

      const arrowPosition = Math.min(
        100,
        ((scrollPosition + windowHeight - timeline.offsetTop) / totalHeight) * 100
      );
      this.renderer.setStyle(timeline, '--arrow-position', `${arrowPosition}%`);

      const events = timeline.querySelectorAll('.event');
      events.forEach((event: HTMLElement) => {
        const rect = event.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          this.renderer.addClass(event, 'visible');
        } else {
          this.renderer.removeClass(event, 'visible');
        }
      });
    };

    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);
    updateTimeline();
  }
}
