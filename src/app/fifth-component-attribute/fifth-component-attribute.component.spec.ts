import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthComponentAttributeComponent } from './fifth-component-attribute.component';

describe('FifthComponentAttributeComponent', () => {
  let component: FifthComponentAttributeComponent;
  let fixture: ComponentFixture<FifthComponentAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthComponentAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthComponentAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
