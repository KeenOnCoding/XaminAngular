import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

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
      sub_title: "Infrastructure As Code",
      desc: "DevOps engineers provide state-of-the-art infrastructure management that involves automatic environment provisioning, a monitoring program with relevant alerts, and autoscaling. Our DevOps strategy draws on the best technologies to help teams rapidly deploy new software and maintain an enhanced experience for customers even during product updates and changes.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-data-analytics',
      title: 'Microservices',
      sub_title: "Microservice Architecturee",
      desc: "Wee offer cutting-edge microservice solutions that guarantee flexibility and scalability for your software.We understand the importance of improving time- to - market and simplifying processes, which is why we use a deployment automation strategy to help you achieve these goals. With our microservice architecture, you won't have to worry about extending the entire system or the failure of a single module affecting the whole infrastructure.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-help-desk-services',
      title: 'Kubernetes',
      sub_title: "Kubernetes",
      desc: "As a certified container orchestration service provider, we provide top- notch Kubernetes consulting, implementation, migration, automation, and DevOps support services. Our certified tech experts make it easy to build, manage, and operate Kubernetes - based solutions tailored to meet your business demands.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-software-development',
      title: 'Continuous Monitoring',
      sub_title: "Continuous Monitoring",
      desc: "We know that real-time feedback is essential for security and operations analysts. That's why we provide well- architected continuous monitoring services to ensure that your IT infrastructure, including networks and applications deployed in the cloud, is always performing at its best.Our DevOps team increase visibility and mitigate cyber - attack risks with a timely alert systemthat triggers a rapid incident response.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    },
    {
      id: 'tab-application-services',
      title: 'Continuous Security',
      sub_title: "Continuous Security",
      desc: "Cloud environments are one of the biggest blind spots in the overall attack facet. That's why we focus on building security into the SDLC at the early stages to leverage excellent DevSecOps practices for seamless process integration, better security, and compliance at lower costs.",
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
    }
  ];

  /*
  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'Popular features that your business needs',
    description: 'Bleeding about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  List1: any[] = [
    {
      class: 'flaticon flaticon-verification',
      title: 'Behavioral-Analytics'
    },
    {
      class: 'flaticon flaticon-accounting',
      title: 'Stock Management'
    },
    {
      class: 'flaticon flaticon-idea',
      title: 'Receivable & Payables'
    },
    {
      class: 'flaticon flaticon-planning-1',
      title: 'Manage Bills & Expenses'
    },
    {
      class: 'flaticon flaticon-transfer',
      title: 'SMS Reminders'
    }
  ];

  List2: any[] =[
    {
      class: 'flaticon flaticon-support',
      title: 'Auto Sync & Backup'
    },
    {
      class: 'flaticon flaticon-plan',
      title: 'Ready & Return Filing'
    },
    {
      class: 'flaticon flaticon-research',
      title: '60+ detailed reports'
    },
    {
      class: 'flaticon flaticon-research',
      title: 'Product Details'
    },
    {
      class: 'flaticon flaticon-customer-1',
      title: 'Customized Rates'
    }
  ]
  */
  constructor() { }

  ngOnInit() {
  }

}
