import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe2024Component } from './informe-2024.component';

describe('Informe2024Component', () => {
  let component: Informe2024Component;
  let fixture: ComponentFixture<Informe2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informe2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informe2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
