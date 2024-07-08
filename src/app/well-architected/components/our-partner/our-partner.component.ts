import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html'
})
export class OurPartnerComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'Make Informed Architectural Decisions',
    description: 'AWS continually refines and expands its Well-Architected Framework based on real-world experience, customer feedback, and advances in cloud technology. You benefit both from AWS expertise and the invaluable insights of our cloud architects.Given the number of challenges our team has encountered and overcomed means that your infrastructure will be very well- architected indeed!'
  };
  List: any[] = [
    {
      //title: 'Data Visualization Practices to Improve',
      // icon: 'fa fa-database',
      //desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      //title: 'Focused on Actionable Insights',
      //icon: 'fa fa-align-left',
      //desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]
  /*titleSectionProp: any = {
    class: 'text-center',
    title: 'TRUSTED BY OVER 26,000 FORWARD - THINKING COMPANIES ',
  };

  List : any[] = [
    {
      img:  '1.png',
    },
    {
      img:  '2.png',
    },
    {
      img:  '3.png',
    },
    {
      img:  '4.png',
    },
    {
      img:  '1.png',
    },
    {
      img:  '2.png',
    }
  ];
  
  hover : boolean = false;
  */

  constructor() { }

  ngOnInit() {
  }

}
