import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick',
  templateUrl: './tips-trick.component.html'
})
export class TipsTrickComponent implements OnInit {


  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'Revolutionize Your Software Delivery with  DevOps',
    description: 'We provide a comprehensive suite of DevOps services from start to finish, enabling you to improve efficiency, automate workflows, eliminate human errors during development and operations processes, and accelerate your time-to-market. Our top Cloud experts will create well- designed CI/CD pipelines for your business using the best DevOps solutions, including Kubernetes, Jenkins, Terraform, Docker, and more.'
  };

  List: any[] = [
    {
      //title: 'Data Visualization Practices to Improve',
     // icon: 'fa fa-database',
      //desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      //title: 'Focused on Actionable Insights',
      //icon: 'fa fa-align-left',
      //desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]

  //List1: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  //List2: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  constructor() { }

  ngOnInit() {
  }

}
