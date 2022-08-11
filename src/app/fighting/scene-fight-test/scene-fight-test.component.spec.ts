import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneFightTestComponent } from './scene-fight-test.component';

describe('SceneFightTestComponent', () => {
  let component: SceneFightTestComponent;
  let fixture: ComponentFixture<SceneFightTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneFightTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneFightTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
