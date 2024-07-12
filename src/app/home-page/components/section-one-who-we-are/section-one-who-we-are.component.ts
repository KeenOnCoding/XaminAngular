import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-one-who-we-are',
  templateUrl: './section-one-who-we-are.component.html'
})
export class SectionFiveCustomerComponent implements OnInit {
  List: any[] = [
    { img: 'white-1.png' },
    { img: 'white-2.png' },
    { img: 'white-3.png' },
    { img: 'white-4.png' },
    { img: 'white-1.png' },
    { img: 'white-2.png' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
