import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  //titleSectionProp: any = {
  //  class: 'text-center',
  //  title: 'ABOUT US OUR COMPANY',
  //  subTitle: 'What is Predictive Analytics?'
  //};

  //List: any[] = [
  //  {
  //    id: 'tab-about-us',
  //    title: 'About Us',
  //    desc: [
  //      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
  //    ],
  //    active: true
  //  },
  //  {
  //    id: 'tab-our-vision',
  //    title: 'Our Vision',
  //    desc: [
  //      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
  //      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //    ]
  //  },
  //  {
  //    id: 'tab-our-mission',
  //    title: 'Our Mission',
  //    desc: [
  //      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //      'Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
  //    ]
  //  }
  //];

  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'FinOps Pillars',
    description: 'FinOps as a Service represents an operational and cultural shift that brings together technology, finance, and business to deliver financial accountability and drive business value. As well as implementing FinOps, we help organizations understand and manage their cloud transformation and associated costs. We also demonstrate how smart cloud usage encourages collaboration and continuous improvement while increasing governance over cloud usage and security'
  };

  List: any[] = [
    {
      title: 'Data Visualization Practices to Improve',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Focused on Actionable Insights',
      icon: 'fa fa-align-left',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Data Visualization Practices to Improve',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Focused on Actionable Insights',
      icon: 'fa fa-align-left',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Data Visualization Practices to Improve',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Focused on Actionable Insights',
      icon: 'fa fa-align-left',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
}
