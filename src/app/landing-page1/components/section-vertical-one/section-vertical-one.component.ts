import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-one',
  templateUrl: './section-vertical-one.component.html'
})

export class SectionVerticalOneComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
   // title: 'About us',
    subTitle: 'Who We Are',
    // tslint:disable-next-line:max-line-length
    description: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.'
  };

  // tslint:disable-next-line:max-line-length
  lists: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service &amp; Operations'];

  constructor() { }

  ngOnInit() {
  }

}
