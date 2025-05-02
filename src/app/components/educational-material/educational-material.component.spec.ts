import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalMaterialComponent } from './educational-material.component';

describe('EducationalMaterialComponent', () => {
  let component: EducationalMaterialComponent;
  let fixture: ComponentFixture<EducationalMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
