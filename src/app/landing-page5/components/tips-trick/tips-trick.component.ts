import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick',
  templateUrl: './tips-trick.component.html'
})
export class TipsTrickComponent implements OnInit {

  //titleSectionProp1: any = {
  //  class: 'text-left',
  //  subTitle: 'Continous Integration & Continous Deployment',
  //  description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  //};

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Infrastructure as a Code',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };
  //titleSectionProp3: any = {
  //  class: 'text-left',
  //  subTitle: 'Continous Monitoring',
  //  description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  //};

  //titleSectionProp4: any = {
  //  class: 'text-left',
  //  subTitle: 'Continous Security',
  //  description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  //};
  //titleSectionProp5: any = {
  //  class: 'text-left',
  //  subTitle: 'Kubernetes',
  //  description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  //};

  //titleSectionProp6: any = {
  //  class: 'text-left',
  //  subTitle: 'Microservices',
  //  description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  //};

  List1: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  List2: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  constructor() { }

  ngOnInit() {
  }

}
