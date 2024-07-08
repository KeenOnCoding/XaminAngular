import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {
  titleSectionProp: any = {
    class: 'text-center',
    //title: 'FEATURES',
    subTitle: 'Benefits'
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

  /*
  titleSectionProp: any = {
    class: 'text-center',
    title: 'WHERE TO USE',
    subTitle: 'Chosen Usage Examples'
  };

  List: any[] = [
    {
      id: 'tab-collect-data',
      title: 'Collect Data',
      active: true,
      subtitle: 'Collect Accurate Data',
      image: './assets/images/usage/5.png',
      tabImage : './assets/images/about-us/13.png',
      desc: [ 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!' ],
      checklist: ['Boost Seo ranking','Marketing','Social Sharing']
    },
    {
      id: 'tab-identifytrends',
      title: 'IdentifyTrends',
      subtitle: 'IdentifyTrends',
      image: './assets/images/usage/4.png',

    },
    {
      id: 'tab-understand',
      title: 'Understand',
      subtitle: 'Understand',
      image: './assets/images/usage/3.png',

    },
    {
      id: 'tab-goals-hypotheses',
      title: 'Goals & Hypotheses',
      subtitle: 'Goals & Hypotheses',
      image: './assets/images/usage/2.png',

    },
    {
      id: 'tab-take-action',
      title: 'Take Action',
      subtitle: 'Take Action',
      image: './assets/images/usage/1.png',
    }
  ];

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
  */
  constructor() { }

  ngOnInit() {
  }

}
