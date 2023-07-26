import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalloffameComponent } from './walloffame.component';

describe('WalloffameComponent', () => {
  let component: WalloffameComponent;
  let fixture: ComponentFixture<WalloffameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalloffameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalloffameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
