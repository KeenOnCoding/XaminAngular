import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-xamin-circle-well-arch',
  templateUrl: './xamin-circle-well-arch.component.html'
})
export class XaminCircleWellArchComponent implements OnInit {

  @Input() circleData: any;

  constructor() { }

  ngOnInit() {
  }

}
