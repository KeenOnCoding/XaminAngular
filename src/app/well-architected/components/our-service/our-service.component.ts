import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {
  titleSectionProp: any = {
    class: ['text-center'],
    //title: 'OUR HISTORY',
    subTitle: 'How It Works',
    description: 'We understand the vital alignment of cloud infrastructure with your business objectives. As your trusted partner for AWS Well-Architected Reviews, we offer a comprehensive approach to assess, optimize, and align your cloud architecture with AWS Well-Architected Framework.'
  };
  List: any[] = [
    {
      title: 'Initial Meeting',
      subtitle: 'In our introductory meeting, we’ll provide you with an outline of the review process. We highlight the industry significance program, share pertinent case studies, discuss primary objectives, review technical documentation for each pillar, and outline solution deliverables',
      img: './assets/images/about-us/1.png',
      time: '30 min - 1 hour',
    },
    {
      title: 'Review',
      subtitle: 'The core of the review involves a thorough assessment of your current cloud architecture and infrastructure. Our AWS-certified experts conduct interviews with your technical and business teams to validate alignment with the AWS Well-Architected Framework',
      img: './assets/images/about-us/2.png',
      time: '30 min - 1 hour'
    },
    {
      title: 'Presentation',
      subtitle: 'Following the review, we submit a comprehensive report outlining identified risks in each of the six pillars. This report serves as a valuable reference, highlighting areas requiring attention and improvement. We also present a plan for remediating noncompliant resources setting out clear priorities and tools to address identified risks.',
      img: './assets/images/about-us/3.png',
      time: '2 hours'
    },
    {
      title: 'Remediation Plan',
      subtitle: 'Our team, including a project manager, chief solutions architect, and certified cloud engineers, collaborates closely with your team to implement necessary improvements',
      img: './assets/images/about-us/4.png',
      time: '30 min - 1 hour'
    }
    ]
  /*
  List: any[] = [
    {
      class: 'bg-gray',
      img: './assets/images/about-us/01.png',
      year: 'Initial Meeting',
      time:'( 30 min - 1 hour )',
      desc: 'In our introductory meeting, we’ll provide you with an outline of the review process. We highlight the industry significance program, share pertinent case studies, discuss primary objectives, review technical documentation for each pillar, and outline solution deliverables.'
    },
    {
      class: 'border',
      img: './assets/images/about-us/07.png',
      year: 'Review',
      time: '( 2 - 4 hours )',
      desc: 'The core of the review involves a thorough assessment of your current cloud architecture and infrastructure. Our AWS-certified experts conduct interviews with your technical and business teams to validate alignment with the AWS Well-Architected Framework.'
    },
    {
      class: 'bg-gray',
      img: './assets/images/about-us/03.png',
      year: 'Presentation',
      time: '( 2 hours )',
      desc: 'Following the review, we submit a comprehensive report outlining identified risks in each of the six pillars. This report serves as a valuable reference, highlighting areas requiring attention and improvement. We also present a plan for remediating noncompliant resources setting out clear priorities and tools to address identified risks..'
    },
    {
      class: 'border',
      img: './assets/images/about-us/02.png',
      year: 'Remediation Plan',
      desc: 'Our team, including a project manager, chief solutions architect, and certified cloud engineers, collaborates closely with your team to implement necessary improvements..'
    },
  ];

  
  titleSectionProp: any = {
    class: 'text-center',
    title: 'Our Services',
    subTitle: 'We Provide Useful Services',
  };
  */
  constructor() { }

  ngOnInit() {
  }

}
