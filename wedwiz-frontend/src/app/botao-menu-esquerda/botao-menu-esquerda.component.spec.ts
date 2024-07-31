import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMenuEsquerdaComponent } from './botao-menu-esquerda.component';

describe('BotaoMenuEsquerdaComponent', () => {
  let component: BotaoMenuEsquerdaComponent;
  let fixture: ComponentFixture<BotaoMenuEsquerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoMenuEsquerdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoMenuEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
