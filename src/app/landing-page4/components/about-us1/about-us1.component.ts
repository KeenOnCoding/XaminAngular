import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html'
})
export class AboutUs1Component implements OnInit {

//titleSectionProp: any = {
//    class: 'text-left',
//    title: 'LETS GET STARTED ',
//    subTitle: 'Are you ready for a better, more productive business?',
//    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
//  };
  list: any[] = [
    {
      value: 20,
      icon: 'fa fa-plus',
      text: 'Infrastructure cost savings'
    },
    {
      value: 66,
      icon: 'fa fa-plus',
      text: 'Increase in administrator productivity'
    },
    {
      value: 43,
      icon: 'fa fa-plus',
      text: 'Lower time to market for new features'
    },
    {
      value: 29,
      icon: 'fa fa-plus',
      text: 'Fewer security-related incidents'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
