import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html'
})
export class DataAnalyticsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"DevOps",
    img:"05.png"
  };

  public activeMenu = '/services/data-analytics';

  images: any[] = [
/*    { image: "./assets/images/about-us/03.png" },*/
    { image: "./assets/images/about-us/devops-1.png" }

  ];

  className= " ";

  checkList1: any[] = [
    'CI/CD',
    'Kubernetes',
    'Security',
    'Application scaling',
    'Application & infrastructure modernization',
    'Logging and monitoring',
  ];
  checkList2: any[] = [
    'Acceleration',
    'Efficiency',
    'Security',
    'Reliability',
    'Performance',
    'Cost Reduction',
  ];
  checkList3: any[] = ['AWS', 'Azure', 'Gogle Cloud Platform'];
  iac: any[] = ['Terraform',
    'Terragrunt',
    'AWS Cloud Formatio',
    "GCP Deployment Manager",
    "Pulumi",
    "AWS CDK"
];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
