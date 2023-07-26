import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincedetailsComponent } from './provincedetails.component';

describe('ProvincedetailsComponent', () => {
  let component: ProvincedetailsComponent;
  let fixture: ComponentFixture<ProvincedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvincedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvincedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
