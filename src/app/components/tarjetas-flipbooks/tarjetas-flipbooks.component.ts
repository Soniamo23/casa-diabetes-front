import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tarjetas-flipbooks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tarjetas-flipbooks.component.html',
  styleUrl: './tarjetas-flipbooks.component.css'
})
export class TarjetasFlipbooksComponent  implements OnInit {
  flipbookId: string = '';
  currentPage = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flipbookId = params['id'];
    });
  }

  nextPage(): void {
    const totalPages = 5; // Asumimos 5 páginas para cada flipbook
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}

