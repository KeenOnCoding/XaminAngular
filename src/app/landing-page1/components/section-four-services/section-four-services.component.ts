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
      title: 'DevOps',
      subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
      href: '/devops',
      delay: '0.6s',
    },
    {
      title: 'Cloud Migration',
      subtitle: 'Contrary to popular established fact that a reader will be distracted by the readable content of a page when looking.',
      href: '/cloud-migration',
      delay: '1.2s',
    },
    {
      title: 'Well-Architected',
      subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
      href: '/well-architected',
      delay: '1.8s',
    },
    {
      title: 'FinOps',
      subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
      href: '/finops-as-a-service'
    },
    {
      title: 'DevSecOps',
      subtitle: 'Contrary to popular established fact that a reader will be distracted by the readable content of a page when looking.',
      href: '/devsecops-as-a-service'
    },
    {
      title: 'Landing Zone',
      subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
      href: '/'
    }
  ]
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
