import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaNacionalComponent } from './encuesta-nacional.component';

describe('EncuestaNacionalComponent', () => {
  let component: EncuestaNacionalComponent;
  let fixture: ComponentFixture<EncuestaNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaNacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
