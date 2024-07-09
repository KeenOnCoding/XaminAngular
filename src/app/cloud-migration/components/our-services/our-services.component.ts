import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html'
})
export class OurServicesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center h2',
    //title: 'PROCESS',
    subTitle: 'Migration Steps'
  };
  List: any[] = [
    {
      class: 'bg-gray',
      img: './assets/images/about-us/1.png',
      title: 'Assessment and planning',
      desc: 'In our introductory meeting, we’ll provide you with an outline of the review process. We highlight the industry significance program, share pertinent case studies, discuss primary objectives, review technical documentation for each pillar, and outline solution deliverables.'
    },
    {
      class: 'border',
      img: './assets/images/about-us/2.png',
      title: 'Preparation',
      desc: 'The core of the review involves a thorough assessment of your current cloud architecture and infrastructure. Our AWS-certified experts conduct interviews with your technical and business teams to validate alignment with the AWS Well-Architected Framework.'
    },
    {
      class: 'bg-gray',
      img: './assets/images/about-us/3.png',
      title: 'Migration',
      desc: 'Following the review, we submit a comprehensive report outlining identified risks in each of the six pillars. This report serves as a valuable reference, highlighting areas requiring attention and improvement. We also present a plan for remediating noncompliant resources setting out clear priorities and tools to address identified risks..'
    },
    {
      class: 'border',
      img: './assets/images/about-us/4.png',
      title: 'Testing and Validation',
      desc: 'Our team, including a project manager, chief solutions architect, and certified cloud engineers, collaborates closely with your team to implement necessary improvements..'
    },
  ];
  /*
  List: any[] = [
    {
      align: 'timeline-article content-right-container',
      title: 'Assessment and planning',
      contact: [
       'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title: 'Preparation',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-right-container',
      title: 'Migration',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title: 'Testing and validation',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'timeline-article content-right-container',
      title: 'Post-migration optimization',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title: 'Continuous monitoring',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
  ]
  constructor() { }
  */
  ngOnInit() {
  }

}
