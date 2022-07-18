import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneExplorationComponent } from './scene-exploration.component';

describe('SceneExplorationComponent', () => {
  let component: SceneExplorationComponent;
  let fixture: ComponentFixture<SceneExplorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneExplorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
