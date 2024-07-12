import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-two',
  templateUrl: './section-vertical-two.component.html'
})
export class SectionVerticalTwoComponent implements OnInit {

  titleSectionProp: any = {
    class: 'pr-lg-5 text-left',
    title: '',
    subTitle: 'What can you do with predictive analytics',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
  };


  List: any[] = [
    { title: 'Business performance', image: './assets/images/fancybox/6-5.png' },
    { title: 'Predict behavior', image: './assets/images/fancybox/6-6.png' },
    { title: 'Drive strategic', image: './assets/images/fancybox/6-5.png' },
    { title: 'Business performance', image: './assets/images/fancybox/6-6.png' },
    { title: 'Understand customers', image: './assets/images/fancybox/6-7.png' },
    { title: 'Predict behavior', image: './assets/images/fancybox/6-8.png' },
    { title: 'Identify trends', image: './assets/images/fancybox/6-6.png' },
    { title: 'Insights into data', image: './assets/images/fancybox/6-7.png' },
  ];

  /*titleSectionProp: any = {
    class: 'text-left',
    title: 'How We Work',
    subTitle: 'See Xamin In Action',
    // tslint:disable-next-line:max-line-length
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact.'
  };


  progressBar1: boolean = true;

  progressBarDetail: any[] = [
    {
      title: 'Big Data Services',
      percentage: 70
    },
    {
      title: 'Data Science Consulting',
      percentage: 50
    },
    {
      title: 'Data Analytics Consulting',
      percentage: 80
    }
  ];
  */
  constructor() { }

  ngOnInit() {
  }

}
