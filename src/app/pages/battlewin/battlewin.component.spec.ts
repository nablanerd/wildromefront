import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlewinComponent } from './battlewin.component';

describe('BattlewinComponent', () => {
  let component: BattlewinComponent;
  let fixture: ComponentFixture<BattlewinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlewinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattlewinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
