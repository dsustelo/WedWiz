import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarratopoComponent } from './barratopo.component';

describe('BarratopoComponent', () => {
  let component: BarratopoComponent;
  let fixture: ComponentFixture<BarratopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarratopoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarratopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
