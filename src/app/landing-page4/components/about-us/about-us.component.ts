import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp1: any = {
    //title: 'About US',
    subTitle: 'What is Cloud Migration?',
    description: 'Choosing the right solution for migrating your IT infrastructure to the cloud is crucial for ensuring the efficient performance of your business. Profisea stands out as the ultimate choice for any customer facing this challenge.',
    class: 'text-left'
  };

  titleSectionProp2: any = {
    //title: 'About US',
    subTitle: 'Why Migrate to the Cloud?',
    description: 'No matter the size of your company, if your business is using on-premises servers, you’ll be in the process of or keen to make the transition to virtual servers in the cloud so you can enjoy on-demand, shared resources to compute, store, and use network services at scale. The cloud is ideal for companies and start-ups racing against the clock to design, build and market new products and services fast and efficiently.',
    class: 'text-left'
  };

  checkList1: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList2: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];

  constructor() { }

  ngOnInit() {
  }

}
