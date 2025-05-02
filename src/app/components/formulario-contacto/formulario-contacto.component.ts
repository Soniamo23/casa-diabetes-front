// formulario-contacto.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  contactForm: FormGroup;
  tipoContacto: string = 'empresa'; // Valores pueden ser 'empresa' o 'personal'
  fontSize: string = 'normal'; // Puede ser 'small', 'normal', o 'large'
  
  @ViewChild('mensajeTextarea') mensajeTextarea: ElementRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      tipoContacto: ['empresa'], // Por defecto está seleccionada "Una empresa"
      nombreCompleto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  seleccionarTipo(tipo: string) {
    this.tipoContacto = tipo;
    this.contactForm.get('tipoContacto')?.setValue(tipo);
  }

  resetearValor() {
    // Función para resetear los botones de tipo de contacto
    this.tipoContacto = 'empresa';
    this.contactForm.get('tipoContacto')?.setValue('empresa');
  }

  // Cambiar tamaño de texto
  changeFontSize(size: string) {
    this.fontSize = size;
  }

  // Volver atrás
  goBack() {
    this.location.back();
  }
  
  // Método para expandir el textarea
  expandTextarea(event: Event) {
    event.preventDefault();
    if (this.mensajeTextarea) {
      this.mensajeTextarea.nativeElement.style.height = '200px';
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      // Aquí añadirías la lógica para enviar el formulario
      alert('Formulario enviado con éxito');
      this.router.navigate(['/']); // Redirige a la página principal
    } else {
      // Marcar todos los campos como tocados para mostrar validaciones
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}