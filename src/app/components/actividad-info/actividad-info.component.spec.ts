import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadInfoComponent } from './actividad-info.component';

describe('ActividadInfoComponent', () => {
  let component: ActividadInfoComponent;
  let fixture: ComponentFixture<ActividadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
