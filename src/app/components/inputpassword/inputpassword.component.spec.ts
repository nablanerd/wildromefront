import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpasswordComponent } from './inputpassword.component';

describe('InputpasswordComponent', () => {
  let component: InputpasswordComponent;
  let fixture: ComponentFixture<InputpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
