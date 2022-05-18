import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { ProgressBarPlaygroundComponent } from './progress-bar-playground/progress-bar-playground.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PlaygroundComponent,
    ProgressBarPlaygroundComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PlaygroundModule { }
