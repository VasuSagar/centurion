import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-playground',
  templateUrl: './progress-bar-playground.component.html',
  styleUrls: ['./progress-bar-playground.component.scss']
})
export class ProgressBarPlaygroundComponent implements OnInit {

  code:string=`<cen-progress-bar [progress]="50" [color]="'#ff0040'">
</cen-progress-bar>`;

  constructor() { }

  ngOnInit(): void {
  }

}
