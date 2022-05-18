import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cen-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  
  @Input() progress!:number;
  @Input() color:string='#0080ff';

  constructor() { }

  ngOnInit(): void {
  }

}
