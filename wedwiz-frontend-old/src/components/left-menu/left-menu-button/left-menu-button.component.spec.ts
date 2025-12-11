import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuButtonComponent } from './left-menu-button.component';

describe('LeftMenuButtonComponent', () => {
  let component: LeftMenuButtonComponent;
  let fixture: ComponentFixture<LeftMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftMenuButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
