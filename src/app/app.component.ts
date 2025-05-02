import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Casa de la Diabetes';

  private showNavbarSubject = new BehaviorSubject<boolean>(true);
  showNavbar$ = this.showNavbarSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Ocultar navbar en las páginas especificadas
      const url = event.url.split('?')[0]; // Eliminar parámetros de consulta si los hay
      this.showNavbarSubject.next(
        url !== '/nueva-pagina' && 
        !url.startsWith('/image-detail') && 
        url !== '/formulario-contacto' &&
        url !== '/nuestro-material' &&
        !url.startsWith('/nueva-pagina')&&
        url !== '/test-findrisk'
      );
    });
  }
}