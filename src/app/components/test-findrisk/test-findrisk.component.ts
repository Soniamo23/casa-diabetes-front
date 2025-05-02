import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-findrisk',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-findrisk.component.html',
  styleUrls: ['./test-findrisk.component.scss']
})
export class TestFindriskComponent implements OnInit {
  findriskForm!: FormGroup;
  submitted = false;
  mostrarResultado = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.findriskForm = this.fb.group({
      edad: ['', Validators.required],
      altura: ['', [Validators.required, Validators.min(100), Validators.max(250)]],
      peso: ['', [Validators.required, Validators.min(30), Validators.max(300)]],
      sexo: ['', Validators.required],
      actividad: ['', Validators.required],
      frutas: ['', Validators.required],
      medicacion: ['', Validators.required],
      glucosa: ['', Validators.required],
      familia: ['', Validators.required]
    });

    // Actualizar IMC cuando cambia altura o peso
    this.findriskForm.get('altura')?.valueChanges.subscribe(() => this.calcularIMC());
    this.findriskForm.get('peso')?.valueChanges.subscribe(() => this.calcularIMC());
  }

  calcularIMC(): string {
    const altura = this.findriskForm.get('altura')?.value;
    const peso = this.findriskForm.get('peso')?.value;
    
    if (altura && peso && altura > 0) {
      const alturaMetros = altura / 100;
      const imc = peso / (alturaMetros * alturaMetros);
      return imc.toFixed(2);
    }
    return '';
  }

  getPuntajeIMC(): number {
    const imc = parseFloat(this.calcularIMC());
    if (isNaN(imc)) return 0;
    
    if (imc < 25) return 0;
    if (imc < 30) return 1;
    return 3;
  }

  calcularPuntaje(): string {
    if (!this.findriskForm.valid) return '0';
    
    const valores = this.findriskForm.value;
    let puntaje = 0;
    
    // Sumar puntos por edad
    puntaje += parseInt(valores.edad) || 0;
    
    // Sumar puntos por IMC
    puntaje += this.getPuntajeIMC();
    
    // Sumar puntos por actividad física
    puntaje += parseInt(valores.actividad) || 0;
    
    // Sumar puntos por consumo de frutas
    puntaje += parseInt(valores.frutas) || 0;
    
    // Sumar puntos por medicación para hipertensión
    puntaje += parseInt(valores.medicacion) || 0;
    
    // Sumar puntos por glucosa alta previa
    puntaje += parseInt(valores.glucosa) || 0;
    
    // Sumar puntos por antecedentes familiares
    puntaje += parseInt(valores.familia) || 0;
    
    return puntaje.toString();
  }

  resetControl(controlName: string): void {
    this.findriskForm.get(controlName)?.reset();
    this.mostrarResultado = false;
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.findriskForm.valid) {
      this.mostrarResultado = true;
      console.log('Formulario enviado', this.findriskForm.value);
      console.log('Puntaje total:', this.calcularPuntaje());
    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos requeridos.');
    }
  }
}