import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixapesquisaComponent } from './caixapesquisa.component';

describe('CaixapesquisaComponent', () => {
  let component: CaixapesquisaComponent;
  let fixture: ComponentFixture<CaixapesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaixapesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixapesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
