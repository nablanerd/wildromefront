import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlelistComponent } from './battlelist.component';

describe('BattlelistComponent', () => {
  let component: BattlelistComponent;
  let fixture: ComponentFixture<BattlelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattlelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
