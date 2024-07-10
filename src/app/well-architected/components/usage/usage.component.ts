import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center text-white',
    // title: 'FEATURES',
    subTitle: ' Benefits'
  };

  List1: any[] = [
    {
      title: 'Risk Mitigation',
      subtitle: 'By systematically evaluating your architecture against best practices, you can address vulnerabilities, and reduce security breaches, system failures, and other critical issues.',
      image: './assets/images/services/scaliability.png'
    },
    {
      title: 'Enhanced Security',
      subtitle: 'By following the recommended security best practices, you can protect your sensitive data and assets from potential security breaches.',
      image: './assets/images/services/acceleration.png'
    },
    {
      title: 'Operational Excellence',
      subtitle: 'Well-Architected reviews provide insights into streamlining operational processes, resulting in smoother deployments and more effective overall management.',
      image: './assets/images/services/disaster-recovery.png'
    }
  ];

  List2: any[] = [
    {
      title: 'Cost Optimization',
      subtitle: 'Through the review process, you can gain insights into your cloud spending patterns and understand how to align costs with actual resource usage.',
      image: './assets/images/services/cost_reduction.png'
    },
    {
      title: 'Improved Performance',
      subtitle: 'The review process identifies opportunities to enhance performance, leading to increased customer satisfaction and business success.',
      image: './assets/images/services/disaster-recovery.png'
    },
    {
      title: 'Innovation & Agility',
      subtitle: 'By continually assessing your architecture, your business will be in a prime position to respond swiftly to challenges and opportunities, while enhancing innovation and agility in your cloud-based solutions.',
      image: './assets/images/services/acceleration.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
