import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() valueMax: number = 1;
  @Input() valueCurrent: number = 1;
  @Input() color: string = "black";
  @Input() backgroundColor: string = "white";
  @Input() displayText: boolean = true;
  @Input() height: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
