import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

// Declaración para jQuery
declare var $: any;

interface ProductoCarrito {
  id: number;
  qty: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, AfterViewInit {
  carrito: ProductoCarrito[] = [];
  metodoEnvio: string = 'azuay'; // 'azuay' o 'local'
  
  // Simulamos datos que luego vendrán del backend
  productosDemo = [
    { id: 1, nombre: 'Humalog Mix', precio: 11.90, imagen: 'assets/humalog.jpg' },
    { id: 2, nombre: 'Insulina Apidra', precio: 11.00, imagen: 'assets/apidra.jpg' },
    { id: 3, nombre: 'Insulina Lantus Vial', precio: 38.90, imagen: 'assets/lantus.jpg' },
    { id: 4, nombre: 'Lantus Pen', precio: 12.30, imagen: 'assets/lantus-pen.jpg' },
    // ... otros productos
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Cargar productos del carrito desde localStorage
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
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

  obtenerNombreProducto(id: number): string {
    const producto = this.productosDemo.find(p => p.id === id);
    return producto ? producto.nombre : `Producto Desconocido (ID: ${id})`;
  }

  obtenerPrecioProducto(id: number): number {
    const producto = this.productosDemo.find(p => p.id === id);
    return producto ? producto.precio : 0;
  }

  obtenerImagenProducto(id: number): string {
    const producto = this.productosDemo.find(p => p.id === id);
    return producto ? producto.imagen : 'assets/placeholder.jpg';
  }

  calcularSubtotal(): number {
    return this.carrito.reduce((total, item) => {
      return total + (this.obtenerPrecioProducto(item.id) * item.qty);
    }, 0);
  }

  calcularTotal(): number {
    const subtotal = this.calcularSubtotal();
    const costoEnvio = this.metodoEnvio === 'azuay' ? 3.00 : 0;
    return subtotal + costoEnvio;
  }

  eliminarProducto(id: number): void {
    this.carrito = this.carrito.filter(item => item.id !== id);
    this.actualizarCarrito();
  }

  actualizarCarrito(): void {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  cambiarDireccion(event: Event): void {
    event.preventDefault();
    console.log('Cambiar dirección');
  }

  procederAlPago(): void {
    if (this.carrito.length > 0) {
      // Guardar el carrito en localStorage para que esté disponible en la página de finalizar compra
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
      // Redirigir a la página de finalizar compra
      this.router.navigate(['/finalizar-compra']);
    } else {
      alert('Tu carrito está vacío. Agrega productos antes de proceder al pago.');
    }
  }
}