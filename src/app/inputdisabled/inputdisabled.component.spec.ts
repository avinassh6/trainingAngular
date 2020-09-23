import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdisabledComponent } from './inputdisabled.component';

describe('InputdisabledComponent', () => {
  let component: InputdisabledComponent;
  let fixture: ComponentFixture<InputdisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputdisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
