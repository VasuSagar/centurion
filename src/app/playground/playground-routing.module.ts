import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';

const routes: Routes = [
  {path:'progressbar',component:ProgressBarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
