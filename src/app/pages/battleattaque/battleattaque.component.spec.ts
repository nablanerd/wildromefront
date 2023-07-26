import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleattaqueComponent } from './battleattaque.component';

describe('BattleattaqueComponent', () => {
  let component: BattleattaqueComponent;
  let fixture: ComponentFixture<BattleattaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleattaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleattaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
