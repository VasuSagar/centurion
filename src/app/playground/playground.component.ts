import { Component, OnInit } from '@angular/core';
import { Playgrounds } from './types/Playgrounds';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  Playgrounds=Playgrounds;
  selectedPlayground:Playgrounds=Playgrounds.Progressbar;

  constructor() { }

  ngOnInit(): void {
  }

  changePlayground(index:Playgrounds){
    this.selectedPlayground=index;
  }

}
