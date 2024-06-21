import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'our Services',
    subTitle: 'Explore Our Data Services'
  };

  navList: any[] = [
    {
      id: 'tab-software-development',
      title: 'CI/CD',
      sub_title: "Continuous Integration & Continuous Deployment",
      desc: "Continuous Integration (CI) pipelines automatically build and test your code very time it's written to detect failures and bugs in the earliest stages. Continuous Deployment (CD) pipelines deploy the code in various environmentsto gain early feedback every time the product is built and passes the testing procedure.",
      active: true,
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-application-services',
      title: 'IaC',
      sub_title: "Choose Your Application Service",
      desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-data-analytics',
      title: 'Microservices',
      sub_title: "Choose Your Data Analytics Service",
      desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-help-desk-services',
      title: 'Kubernetes',
      sub_title: "Choose Your Help Desk Service",
      desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-software-development',
      title: 'Continuous Monitoring',
      sub_title: "Continuous Integration & Continuous Deployment",
      desc: "Continuous Integration (CI) pipelines automatically build and test your code very time it's written to detect failures and bugs in the earliest stages. Continuous Deployment (CD) pipelines deploy the code in various environmentsto gain early feedback every time the product is built and passes the testing procedure.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-application-services',
      title: 'Continuous Security',
      sub_title: "Choose Your Application Service",
      desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    }
  ];


  //titleSectionProp: any = {
  //  class: 'text-center',
  //  title: 'BLOG',
  //  subTitle: 'Recent Blog',
  //  desc:'It is a long established fact that a reader will be distracted'
  //};

  //List: any[] = [
  //  {
  //    img: './assets/images/about-us/02.png',
  //    name:  'HTML',
  //    time: 'September 26, 2019 ',
  //    title: 'Build Construction',
  //    desc: '“They bring to you a host of beautifully created infographics that contain the latest digital marketing ',
  //  },
  //  {
  //    img: './assets/images/about-us/03.png',
  //    name:  'Design',
  //    time: 'September 26, 2019 ',
  //    title: 'Life Lack Meaning',
  //    desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
  //  },
  //  {
  //    img: './assets/images/about-us/04.png',
  //    name:  'HTML',
  //    time: 'September 26, 2019 ',
  //    title: 'Construction industry',
  //    desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing',
  //  },
  //  {
  //    img: './assets/images/about-us/05.png',
  //    name:  'CSS',
  //    time: 'September 26, 2019 ',
  //    title: 'Content Marketing',
  //    desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
  //  }
  //];

  constructor() { }

  ngOnInit() {
  }

}
