import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center text-white',
    // title: 'FEATURES',
    subTitle: ' Benefits'
  };

  List1: any[] = [
    {
      title: 'Cloud Optimization',
      subtitle: 'Decrease time to market by accelerating product and service delivery through optimized cloud usage.',
      image: './assets/images/services/scaliability.png'
    },
    {
      title: 'Enhanced resiliency',
      subtitle: 'Enhance operational resiliency through improved security measures and best practices.',
      image: './assets/images/services/acceleration.png'
    },
    {
      title: 'Finance Managment',
      subtitle: 'Drive cloud financial management and increase commercial value by aligning cloud costs with business goals.',
      image: './assets/images/services/disaster-recovery.png'
    }
  ];

  List2: any[] = [
    {
      title: 'Cost Optimization',
      subtitle: 'Reduce existing cloud costs and prevent unnecessary spending boosts.',
      image: './assets/images/services/cost_reduction.png'
    },
    {
      title: 'Improved Performance',
      subtitle: 'Match running cloud resources to actual workload demand to boost cost efficiency.',
      image: './assets/images/services/disaster-recovery.png'
    },
    {
      title: 'Remediation process',
      subtitle: 'Identify and address black holes, deprecated services, and unutilized resources to eliminate wasteful spending',
      image: './assets/images/services/acceleration.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
