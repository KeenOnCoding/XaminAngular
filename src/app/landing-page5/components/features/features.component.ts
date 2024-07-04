import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center text-white',
    //title: 'FEATURES',
    subTitle: 'Benefits'
  };

  List1: any[] = [
    {
      title: 'Acceleration',
      subtitle: 'DevOps as a Service provides one seamless workflow for software delivery, eliminating toil, accelerating time-to-market, and reducing waste to improve product quality',
      image: './assets/images/services/acceleration.png'
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
