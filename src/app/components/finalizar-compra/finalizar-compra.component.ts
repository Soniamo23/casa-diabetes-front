import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Declaración para jQuery
declare var $: any;

// Definición de la interfaz para los items del carrito
interface ItemCarrito {
  id: number;
  nombre: string;
  precio: number;
  qty: number;
}

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css'],
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [ReactiveFormsModule, CommonModule] // Importa ReactiveFormsModule aquí
})
export class FinalizarCompraComponent implements OnInit, AfterViewInit {
  formularioPago!: FormGroup;
  carrito: ItemCarrito[] = [];
  metodoEnvio = 'azuay';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Recuperar el carrito desde localStorage
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
    
    // Inicializar el formulario
    this.formularioPago = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      empresa: [''],
      pais: ['Ecuador', Validators.required],
      direccion: ['', Validators.required],
      apartamento: [''],
      ciudad: ['', Validators.required],
      provincia: ['Azuay', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccionDiferente: [false],
      notas: [''],
      metodoEnvio: ['azuay', Validators.required]  // Agregado método de envío al formulario
    });
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

  calcularSubtotal(): number {
    return this.carrito.reduce((total, item) => total + (item.precio * item.qty), 0);
  }

  calcularTotal(): number {
    let total = this.calcularSubtotal();
    if (this.formularioPago.get('metodoEnvio')?.value === 'azuay') {
      total += 3.00;
    }
    return total;
  }

  volverAlCarrito(): void {
    this.router.navigate(['/carrito']);
  }

  realizarPedido(): void {
    if (this.formularioPago.valid) {
      const pedido = {
        cliente: this.formularioPago.value,
        productos: this.carrito,
        envio: this.formularioPago.get('metodoEnvio')?.value,
        total: this.calcularTotal()
      };
      
      console.log('Pedido realizado:', pedido);
      localStorage.removeItem('carrito');
      alert('¡Pedido realizado con éxito!');
      this.router.navigate(['/']);
    } else {
      Object.keys(this.formularioPago.controls).forEach(key => {
        const control = this.formularioPago.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
      alert('Por favor, completa todos los campos obligatorios');
    }
  }

  obtenerEstiloError(nombreControl: string): any {
    const control = this.formularioPago.get(nombreControl);
    return {
      'campo-invalido': control?.invalid && control?.touched
    };
  }

  mostrarError(nombreControl: string): boolean {
    const control = this.formularioPago.get(nombreControl);
    return (control?.invalid ?? false) && (control?.touched ?? false);
  }
}