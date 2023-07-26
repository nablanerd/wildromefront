import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleloseComponent } from './battlelose.component';

describe('BattleloseComponent', () => {
  let component: BattleloseComponent;
  let fixture: ComponentFixture<BattleloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
