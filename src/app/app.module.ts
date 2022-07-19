import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SceneFightComponent } from './fighting/scene-fight/scene-fight.component';
import { CharacterDetailComponent } from './fighting/character-detail/character-detail.component';
import { ProgressBarComponent } from './shared-components/progress-bar/progress-bar.component';
import { SceneExplorationComponent } from './exploration/scene-exploration/scene-exploration.component';
import { SceneInventoryComponent } from './scene-inventory/scene-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneFightComponent,
    CharacterDetailComponent,
    ProgressBarComponent,
    SceneExplorationComponent,
    SceneInventoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
