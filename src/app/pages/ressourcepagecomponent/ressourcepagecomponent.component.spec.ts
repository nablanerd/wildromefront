import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcePageComponent } from './ressourcepagecomponent.component';

describe('RessourceComponent', () => {
  let component: RessourcePageComponent;
  let fixture: ComponentFixture<RessourcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourcePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
