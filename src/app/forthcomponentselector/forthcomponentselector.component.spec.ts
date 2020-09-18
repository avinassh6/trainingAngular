import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthcomponentselectorComponent } from './forthcomponentselector.component';

describe('ForthcomponentselectorComponent', () => {
  let component: ForthcomponentselectorComponent;
  let fixture: ComponentFixture<ForthcomponentselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthcomponentselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthcomponentselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
