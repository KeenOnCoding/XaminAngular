import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four-services',
  templateUrl: './section-four-services.component.html'
})
export class SectionFourServicesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    //title: 'Our Services',
    subTitle: 'What We Do',
  };

  List: any[] = [
    {
      title: 'Google Analytics',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-1.png',
      bg_img: './assets/images/bg/11-bg.png',
    },
    {
      title: 'Marketing Tracking',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-2.png',
      bg_img: './assets/images/bg/11-bg.png',
    },
    {
      title: 'Services and Solutions',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-3.png',
      bg_img: './assets/images/bg/11-bg.png',
    },
    {
      title: 'Conversion Optimization',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-4.png',
      bg_img: './assets/images/bg/11-bg.png',
    }
  ];
  constructor() { }

  ngOnInit() {
  }


  //titleSectionProp: any = {
  //  class: 'text-center',
  //  title: 'our Services',
  //  subTitle: 'Explore Our Data Services'
  //};

  //navList: any[] = [
  //  {
  //    id: 'tab-big-data',
  //    title: 'Big Data',
  //    img: '03.png',
  //    link: '/services',
  //    active: true,
  //    subtitle: 'Choose Your Software Development Service by Category',
  //    desc: 'Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
  //    chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
  //    chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
  //    chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
  //  },
  //  {
  //    id: 'tab-machine-learning',
  //    title: 'Machine Learning',
  //    img: '02.png',
  //    link: '/services',
  //    subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  //    subtitle2: 'Dignissimos ducimus qui blanditiis',
  //    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
  //    chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
  //  },
  //  {
  //    id: 'tab-analytical-ai',
  //    title: 'Analytical AI',
  //    img: '01.png',
  //    link: '/services',
  //    subtitle: 'Choose Your Software Development Service by Category',
  //    desc: 'Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
  //    chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
  //    chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
  //    chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
  //  },
  //  {
  //    id: 'tab-computer-vision',
  //    title: 'Computer Vision',
  //    img: '04.png',
  //    link: '/services',
  //    subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  //    subtitle2: 'Dignissimos ducimus qui blanditiis',
  //    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
  //    chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
  //  }
  //];

  //constructor() { }

  //ngOnInit() {
  //}

}
