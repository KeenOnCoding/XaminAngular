import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-type',
  templateUrl: './analysis-type.component.html'
})
export class AnalysisTypeComponent implements OnInit {

  //List: any [] = [
  //  {
  //    title: 'Fine-grained Analysis',
  //    desc: 'All types of consulting service It is a long established fact .',
  //    image: './assets/images/services/03.png',
  //    checklist: ['Positive','Neutral','Negative']
  //  },
  //  {
  //    title: 'Emotion detection',
  //    desc: 'All types of consulting service It is a long established fact .',
  //    image: './assets/images/services/15.png',
  //    checklist: ['Positive','Neutral','Negative']
  //  },
  //  {
  //    title: 'Multilingual analysis',
  //    desc: 'All types of consulting service It is a long established fact .',
  //    image: './assets/images/services/03.png',
  //    checklist: ['Positive','Neutral','Negative']
  //  }
  //];

  titleSectionProp: any = {
    class: 'text-center',
    subTitle: 'Security as a Shared Responsibility',
  };

  progressBar1: boolean = true;
  List1: any[] = [
    {
      title: 'Static Security Testing (SAST)',
      subTitle:'run Static application security testing (SAST) scans (a dramatic year-on-year jump from less than 40%)',
      percentage: '53'
    },
    {
      title: 'Synamic Security Testing (DAST)',
      percentage: '55'
    },
    {
      title: 'Containers Scanning',
      percentage: '60'
    }
  ];

  progressBar2: boolean = true;
  List2: any[] = [
    {
      title: 'SAST lite scanners in a web IDE',
      percentage: '30'
    },
    {
      title: 'Pulling scan results into pipeline report for devs',
      percentage: '29'
    },
    {
      title: 'DAST container scans easily available to devs',
      percentage: '29',
      style: 'color:red'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
