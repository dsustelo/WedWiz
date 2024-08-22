import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoperfilComponent } from './botaoperfil.component';

describe('BotaoperfilComponent', () => {
  let component: BotaoperfilComponent;
  let fixture: ComponentFixture<BotaoperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoperfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
