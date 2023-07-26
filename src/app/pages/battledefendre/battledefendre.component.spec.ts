import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattledefendreComponent } from './battledefendre.component';

describe('BattledefendreComponent', () => {
  let component: BattledefendreComponent;
  let fixture: ComponentFixture<BattledefendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattledefendreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattledefendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
