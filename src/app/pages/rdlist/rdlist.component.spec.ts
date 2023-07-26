import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdlistComponent } from './rdlist.component';

describe('RdlistComponent', () => {
  let component: RdlistComponent;
  let fixture: ComponentFixture<RdlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
