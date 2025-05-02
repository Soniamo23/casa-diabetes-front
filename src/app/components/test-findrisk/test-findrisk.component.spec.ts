import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFindriskComponent } from './test-findrisk.component';

describe('TestFindriskComponent', () => {
  let component: TestFindriskComponent;
  let fixture: ComponentFixture<TestFindriskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFindriskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFindriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
