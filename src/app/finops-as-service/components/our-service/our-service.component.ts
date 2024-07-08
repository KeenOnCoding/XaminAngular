import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {

  //titleSectionProp: any = {
  //  class: 'text-center',
  //  title: 'OUR SERVICES',
  //  subTitle: 'We Provide Useful Services'
  //};

  //List: any[] = [
  //  {
  //    id: 'tab-software-development',
  //    title: 'Software Development',
  //    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //    image: './assets/images/services/6-1.png',
  //    tabImage : './assets/images/services/13.png',
  //    active: true
  //  },
  //  {
  //    id: 'tab-application-services',
  //    title: 'Application Services',
  //    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //    image: './assets/images/services/6-2.png',
  //    tabImage : './assets/images/services/14.png'
  //  },
  //  {
  //    id: 'tab-data-analytics',
  //    title: 'Data Analytics',
  //    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //    image: './assets/images/services/6-3.png',
  //    tabImage : './assets/images/services/13.png'
  //  },
  //  {
  //    id: 'tab-help-desk',
  //    title: 'Help Desk Services',
  //    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //    image: './assets/images/services/6-4.png',
  //    tabImage : './assets/images/services/14.png'
  //  }
  //];

  //tabActive(id) {
  //  // @ts-ignore
  //  const jquery = window.$;
  //  jquery('.tab-content').find('.active').removeClass('active show');
  //  jquery('#' + id).addClass('active show');
  //}

  titleSectionProp: any = {
    class: 'text-center',
    //title: 'FEATURES',
    subTitle: 'FinOps Benefits'
  };

  List1: any[] = [
    {
      title: 'Acceleration',
      subtitle: 'DevOps as a Service provides one seamless workflow for software delivery, eliminating toil, accelerating time-to-market, and reducing waste to improve product quality',
      image: './assets/images/services/01.png'
    },
    {
      title: 'Security',
      subtitle: 'DevSecOps increases network activity visibility, transparency, and overall security at every stage of the SDLC to deliver robust applications and services at high velocity.',
      image: './assets/images/services/02.png'
    },
    {
      title: 'Performance',
      subtitle: 'DevOps improves performance and increases customer satisfaction, implementing automated monitoring of customer feedback, continuous analytics, and frequent updates.',
      image: './assets/images/services/03.png'
    }
  ];

  List2: any[] = [
    {
      title: 'Efficiency',
      subtitle: 'Agile transformation delivers 30% gains in efficiency, customer satisfaction, employee engagement, and operational productivity, eliminating manual processes',
      image: './assets/images/services/04.png'
    },
    {
      title: 'Reliability',
      subtitle: 'SRE services benefit any business, ensuring automation, reliability, and scaling during peak times and providing a seamless and consistent development environment.',
      image: './assets/images/services/05.png'
    },
    {
      title: 'Cost Reduction',
      subtitle: 'Best DevOps tools and cloud services save maintenance costs and eliminate unnecessary capital expenditures to help businesses get a much faster investment return.',
      image: './assets/images/services/06.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
