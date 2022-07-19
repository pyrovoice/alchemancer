import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() valueMax: number = 1;
  @Input() valueCurrent: number = 1;
  @Input() color: string = "blue";
  constructor() { }

  ngOnInit(): void {
  }

}
