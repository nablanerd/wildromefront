import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeststyleComponent } from './teststyle.component';

describe('TeststyleComponent', () => {
  let component: TeststyleComponent;
  let fixture: ComponentFixture<TeststyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeststyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeststyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
