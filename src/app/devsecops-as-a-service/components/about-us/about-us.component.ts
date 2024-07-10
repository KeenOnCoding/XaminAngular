import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center text-white',
    // title: 'FEATURES',
    subTitle: ' Benefits'
  };

  List1: any[] = [
    {
      title: 'Recovery',
      subtitle: 'Recovery is accelerated should a security incident occur',
      image: './assets/images/services/scaliability.png'
    },
    {
      title: 'Supervision',
      subtitle: 'All security aspects of your delivery pipeline are supervised',
      image: './assets/images/services/acceleration.png'
    },
    {
      title: 'Compliance',
      subtitle: 'Security, reliability, and compliance are incorporated into the SDLC',
      image: './assets/images/services/disaster-recovery.png'
    }
  ];

  List2: any[] = [
    {
      title: 'Cost Optimization',
      subtitle: 'Drastically reduce expenses by minimizing vulnerabilities in products, thereby averting security incidents',
      image: './assets/images/services/cost_reduction.png'
    },
    {
      title: 'Performance',
      subtitle: 'Software delivery speed is increased by addressing potential errors as early as possible',
      image: './assets/images/services/disaster-recovery.png'
    },
    {
      title: 'Performance',
      subtitle: 'Software delivery speed is increased by addressing potential errors as early as possible',
      image: './assets/images/services/disaster-recovery.png'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
