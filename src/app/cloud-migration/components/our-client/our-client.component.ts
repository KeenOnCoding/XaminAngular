import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html'
})
export class OurClientComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center text-white',
   // title: 'FEATURES',
    subTitle: ' Benefits'
  };

  List1: any[] = [
    {
      title: 'Scalability',
      subtitle: 'Companies with changing demand for their services use cloud-based infrastructure to avoid unnecessary investment in additional equipment.',
      image: './assets/images/services/scaliability.png'
    },
    {
      title: 'Market agility & speed',
      subtitle: 'Cloud migration services empower businesses to swiftly adapt and innovate to cater to their customers’ evolving needs and introduce new services.',
      image: './assets/images/services/acceleration.png'
    }
  ];

  List2: any[] = [
    {
      title: 'Reduced costs',
      subtitle: 'Cloud infrastructure enables businesses to transit their IT spending from capital costs to operating expenditures, saving considerable money.',
      image: './assets/images/services/cost_reduction.png'
    },
    {
      title: 'Business continuity & disaster recovery',
      subtitle: 'Cloud Service Providers guarantee that key systems and data remain accessible in the case of an interruption or outage.',
      image: './assets/images/services/disaster-recovery.png'
    }
  ]

  //List1: any[] = [
  //  { title: 'Microsoft Partner of the Year Award', image: './assets/images/awards/1.png' },
  //  { title: 'Global Sourcing Awards 2018 Finalist', image: './assets/images/awards/2.png' },
  //  { title: 'Gold Winner of 2013 Horizon Awards', image: './assets/images/awards/3.png' },
  //  { title: 'European Software Testing Awards Finalist', image: './assets/images/awards/4.png' }
  //];

  //List2: any[] = [
  //  { title: 'Microsoft Partner of the Year Award', image: './assets/images/awards/5.png' },
  //  { title: 'Global Sourcing Awards 2018 Finalist', image: './assets/images/awards/1.png' },
  //  { title: 'Gold Winner of 2013 Horizon Awards', image: './assets/images/awards/2.png' }
  //];

  constructor() { }

  ngOnInit() {
  }

}
