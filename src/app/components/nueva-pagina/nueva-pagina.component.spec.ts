import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPaginaComponent } from './nueva-pagina.component';

describe('NuevaPaginaComponent', () => {
  let component: NuevaPaginaComponent;
  let fixture: ComponentFixture<NuevaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
