import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from './progress-bar/progress-bar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  exports:[
    ProgressBarModule
  ]
})
export class ComponentsModule { }
