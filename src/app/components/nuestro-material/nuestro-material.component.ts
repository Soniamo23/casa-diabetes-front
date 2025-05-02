import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuestro-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestro-material.component.html',
  styleUrls: ['./nuestro-material.component.css']
})
export class NuestroMaterialComponent {
  constructor(private router: Router) {}

  navigateToSection(sectionId: string) {
    this.router.navigate(['/nueva-pagina'], { fragment: sectionId });
  }
}
