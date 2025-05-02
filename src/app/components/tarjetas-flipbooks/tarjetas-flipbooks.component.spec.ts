import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasFlipbooksComponent } from './tarjetas-flipbooks.component';

describe('TarjetasFlipbooksComponent', () => {
  let component: TarjetasFlipbooksComponent;
  let fixture: ComponentFixture<TarjetasFlipbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasFlipbooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasFlipbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
