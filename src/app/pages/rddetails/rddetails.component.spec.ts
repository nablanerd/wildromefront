import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RddetailsComponent } from './rddetails.component';

describe('RddetailsComponent', () => {
  let component: RddetailsComponent;
  let fixture: ComponentFixture<RddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
