import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionlistComponent } from './legionlist.component';

describe('LegionlistComponent', () => {
  let component: LegionlistComponent;
  let fixture: ComponentFixture<LegionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
