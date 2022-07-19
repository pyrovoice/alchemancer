import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneInventoryComponent } from './scene-inventory.component';

describe('SceneInventoryComponent', () => {
  let component: SceneInventoryComponent;
  let fixture: ComponentFixture<SceneInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
