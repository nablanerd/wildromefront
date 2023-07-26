import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingbuildComponent } from './buildingbuild.component';

describe('BuildingbuildComponent', () => {
  let component: BuildingbuildComponent;
  let fixture: ComponentFixture<BuildingbuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingbuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
