import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html'
})
export class CountersComponent implements OnInit {
  titleSectionProp2: any = {
    //title: 'About US',
    subTitle: 'Increase the Value of FinOps',
    description: 'Cutting-edge AI-powered platform and well-architected FinOps services, you can reduce cloud costs by up to 75% and accelerate business innovation. Don’t let cloud costs weigh you down – elevate your cloud cost management with FinOps services today!',
    class: 'text-left'
  };

  List: any[] = [
    {
      number: 422,
      title: 'Managed Analytics as a global business',
      image: './assets/images/fancybox/4.png'
    },
    {
      number: 32,
      title: 'Data Management in the telecoms',
      image: './assets/images/fancybox/3.png'
    },
    {
      number: 563,
      title: 'Project complete in timeline.',
      image: './assets/images/fancybox/2.png'
    },
    {
      number: 1254,
      title: 'Custom Portfolio Created',
      image: './assets/images/fancybox/1.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
