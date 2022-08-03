import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTeamSelectionComponent } from './location-team-selection.component';

describe('LocationTeamSelectionComponent', () => {
  let component: LocationTeamSelectionComponent;
  let fixture: ComponentFixture<LocationTeamSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationTeamSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTeamSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
