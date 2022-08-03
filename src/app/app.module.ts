import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SceneFightComponent } from './fighting/scene-fight/scene-fight.component';
import { CharacterDetailComponent } from './fighting/character-detail/character-detail.component';
import { ProgressBarComponent } from './shared-components/progress-bar/progress-bar.component';
import { SceneExplorationComponent } from './exploration/scene-exploration/scene-exploration.component';
import { SceneInventoryComponent } from './scene-inventory/scene-inventory.component';
import { LocationSelectionComponent } from './fighting/location-selection/location-selection.component';
import { LocationTeamSelectionComponent } from './fighting/location-team-selection/location-team-selection.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SceneFightComponent,
    CharacterDetailComponent,
    ProgressBarComponent,
    SceneExplorationComponent,
    SceneInventoryComponent,
    LocationSelectionComponent,
    LocationTeamSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
