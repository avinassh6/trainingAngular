import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComponentinterpolationComponent } from './third-componentinterpolation.component';

describe('ThirdComponentinterpolationComponent', () => {
  let component: ThirdComponentinterpolationComponent;
  let fixture: ComponentFixture<ThirdComponentinterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdComponentinterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdComponentinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
