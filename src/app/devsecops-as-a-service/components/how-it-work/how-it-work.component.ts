import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html'
})
export class HowItWorkComponent implements OnInit {


  titleSectionProp2: any = {
    //title: 'About US',
    subTitle: 'Seamless & Secure Workflow',
    description: 'Our experts leverage the best DevSecOps practices and technologies to unify software development processes into one seamless and secure workflow. We identify all vulnerabilities in your SDLC, and our experienced professionals provide top DevSecOps automation to unify software development processes into one seamless flow, smoothly integrating security and compliance into each step. You can be sure that your product 100% meets your safety and security safeguards since security requirements, metrics and testing top our list of concerns.We also assist you to successfully implementing a DevSecOps culture within your company to encourage a security- first mindset among your teams.',
    class: 'text-left'
  };
  //titleSectionProp: any = {
  //  class: 'text-center',
  //  title: 'WORK',
  //  subTitle: 'How it works',
  //};

  //List: any[] = [
  //  {
  //    title: 'Text',
  //    desc: 'It is a long established fact that a fre ader will be distracted by the .',
  //    image: './assets/images/fancybox/7-1.png',
  //    arrow_image: './assets/images/fancybox/arrow-7.png',
  //    arrowbg_img: './assets/images/fancybox/bg-7-1.png',
  //  },
  //  {
  //    title: 'ML Algorithms',
  //    desc: 'It is a long established fact that a fre ader will be distracted by the .',
  //    image: './assets/images/fancybox/7-2.png',
  //    arrow_image: './assets/images/fancybox/arrow-7.png',
  //    arrowbg_img: './assets/images/fancybox/bg-7-1.png',
  //  },
  //  {
  //    title: 'Classified Model',
  //    desc: 'It is a long established fact that a fre ader will be distracted by the .',
  //    image: './assets/images/fancybox/7-3.png',
  //    arrow_image: './assets/images/fancybox/arrow-7.png',
  //    arrowbg_img: './assets/images/fancybox/bg-7-1.png',
  //  },
  //  {
  //    title: 'Prediction',
  //    desc: 'It is a long established fact that a fre ader will be distracted by the .',
  //    image: './assets/images/fancybox/7-4.png',
  //    arrowbg_img: './assets/images/fancybox/bg-7-1.png',
  //  }

  //]
  /*
  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'Why DevSecOps',
    description: 'We provide  benefits that encompass a secure software development lifecycle with huge cost reductions, and more. Here are some of the benefits of using our DevSecOps as a Service:'
  };

  List: any[] = [
    {
      title: 'Security',
      icon: 'fa fa-database',
      desc: 'All security aspects of your delivery pipeline are supervised'
    },
    {
      title: 'Recovery',
      icon: 'fa fa-align-left',
      desc: 'Recovery is accelerated should a security incident occur'
    },
    {
      title: 'Reliability',
      icon: 'fa fa-database',
      desc: 'Reliability, and compliance are incorporated into the SDLC.'
    },
    {
      title: 'Delivery Speed',
      icon: 'fa fa-align-left',
      desc: 'Software delivery speed is increased by addressing potential errors as early as possible.'
    },
    {
      title: 'Automation',
      icon: 'fa fa-database',
      desc: 'Automated testing technologies are incorporated into each software delivery stage.'
    },
    {
      title: 'Maintainability',
      icon: 'fa fa-align-left',
      desc: 'Your company gains a competitive advantage and prevents reputation loss accidents'
    },
    {
      title: 'Cost saving',
      icon: 'fa fa-database',
      desc: 'Drastically reduce expenses by minimizing vulnerabilities in products, thereby averting security incidents'
    },
    {
      title: 'Team collaboration',
      icon: 'fa fa-align-left',
      desc: 'Enhanced team collaboration that allows each specialist to play a role in keeping applications secure and compliant'
    }
  ]
  */
  constructor() { }

  ngOnInit() {
  }

}
