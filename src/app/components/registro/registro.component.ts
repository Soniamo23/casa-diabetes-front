import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar FormsModule para [(ngModel)]
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements AfterViewInit {
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  email: string = '';
  ciudad: string = '';
  direccion: string = '';
  mensajeError: string = '';
  mostrarError: boolean = false; // Control de errores

  ngAfterViewInit() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }

  enviarFormulario() {
    // Validación de campos vacíos
    if (!this.nombre || !this.apellido || !this.telefono || !this.fechaNacimiento || !this.email || !this.ciudad || !this.direccion) {
      this.mensajeError = 'Por favor, completa todos los campos requeridos.';
      this.mostrarError = true;
      return;
    }

    // Limpiar mensaje de error
    this.mensajeError = '';
    this.mostrarError = false;

    // Desplazar al inicio después de enviar
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }
}
