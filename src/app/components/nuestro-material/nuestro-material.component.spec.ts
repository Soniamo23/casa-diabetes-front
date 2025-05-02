import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroMaterialComponent } from './nuestro-material.component';

describe('NuestroMaterialComponent', () => {
  let component: NuestroMaterialComponent;
  let fixture: ComponentFixture<NuestroMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
