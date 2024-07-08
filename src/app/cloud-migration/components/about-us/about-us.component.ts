import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp1: any = {
    //title: 'About US',
    subTitle: 'Why Migrate to the Cloud?',
    description: 'No matter the size of your company, if your business is using on-premises servers, you’ll be in the process of or keen to make the transition to virtual servers in the cloud so you can enjoy on-demand, shared resources to compute, store, and use network services at scale. The cloud is ideal for companies and start-ups racing against the clock to design, build and market new products and services fast and efficiently.',
    class: 'text-left'
  };

  titleSectionProp2: any = {
    //title: 'About US',
    subTitle: 'Increase the Value of Your Cloud Migration',
    description: 'We help businesses plan, design and implement efficient, secure, and reliable cloud infrastructure regardless of the size or complexity of the project at hand. Our certified DevOps engineers deeply understand the complexity of cloud migration, particularly those in heavily- regulated areas such as finance and healthcare.By leveraging the best automation tools and technologies, Profisea streamlines cloud migration, eliminates human errors, and provides complex support for our customers’ cloud environments.',
    class: 'text-left'
  };

  checkList1: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList2: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];

  constructor() { }

  ngOnInit() {
  }

}
