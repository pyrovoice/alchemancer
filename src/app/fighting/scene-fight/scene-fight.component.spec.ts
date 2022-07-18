import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneFightComponent } from './scene-fight.component';

describe('SceneFightComponent', () => {
  let component: SceneFightComponent;
  let fixture: ComponentFixture<SceneFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
