import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  //checkList1: any[] = [
  //  'Polarity: if the speaker express a positive or negative opinion,',
  //  'Subject: the thing that is being talked about',
  //  'Opinion holder: the person, or entity that expresses the opinion.'
  //]

  titleSectionProp: any = {
    class: 'text-center',
    //title: 'FEATURES',
    subTitle: 'DevSecOps Benefits'
  };

  List1: any[] = [
    {
      title: 'Supervision',
      subtitle: 'All security aspects of your delivery pipeline are supervised',
      image: './assets/images/services/01.png'
    },
    {
      title: 'Security',
      subtitle: 'Security, reliability, and compliance are incorporated into the SDLC',
      image: './assets/images/services/02.png'
    },
    {
      title: 'Automation',
      subtitle: 'Automated testing technologies are incorporated into each software delivery stage',
      image: './assets/images/services/03.png'
    }
  ];

  List2: any[] = [
    {
      title: 'Recovery',
      subtitle: 'Recovery is accelerated should a security incident occur',
      image: './assets/images/services/04.png'
    },
    {
      title: 'Delivery',
      subtitle: 'Software delivery speed is increased by addressing potential errors as early as possible',
      image: './assets/images/services/05.png'
    },
    {
      title: 'Cost Reduction',
      subtitle: 'Your company gains a competitive advantage and prevents unpredictable cost expentditures',
      image: './assets/images/services/06.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
