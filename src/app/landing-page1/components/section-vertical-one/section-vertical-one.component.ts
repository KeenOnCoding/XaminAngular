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
    description: 'As DevOps and cloud best practices experts, we empower customer-tailored software release pipelines for accelerated time to market.Our 100% customized solutions include Cloud Migration, DevOps, Well- Architected Framework Review, FinOps, Site Reliability Engineering(SRE), DevSecOps, Application Lifecycle Management(ALM), and Network Operations Center(NOC) services.'
  };

  // tslint:disable-next-line:max-line-length
  lists: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service &amp; Operations'];

  constructor() { }

  ngOnInit() {
  }

}
