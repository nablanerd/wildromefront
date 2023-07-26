import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincebuildComponent } from './provincebuild.component';

describe('ProvincebuildComponent', () => {
  let component: ProvincebuildComponent;
  let fixture: ComponentFixture<ProvincebuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvincebuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvincebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
