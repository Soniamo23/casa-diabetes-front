import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit, AfterViewInit {
  productId!: number; // Usamos el operador de aserción no nula
  cart: { id: number; qty: number }[] = [];
  added = false;
  showCart = false;
  selectedQty = 1;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.productId = idParam ? Number(idParam) : 0; // Manejo de null
    this.cart = JSON.parse(localStorage.getItem('carrito') || '[]');
    this.added = this.cart.some(item => item.id === this.productId);
    if (this.added) {
      const existing = this.cart.find(item => item.id === this.productId)!;
      this.selectedQty = existing.qty;
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
  
  addToCart(): void {
    if (!this.added) {
      this.cart.push({ id: this.productId, qty: this.selectedQty });
      localStorage.setItem('carrito', JSON.stringify(this.cart));
      this.added = true;
    }
  }
  
  toggleCart(): void {
    this.showCart = !this.showCart;
  }
  
  trackById(_: number, item: { id: number; qty: number }) {
    return item.id;
  }
}