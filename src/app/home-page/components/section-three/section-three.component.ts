import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html'
})
export class SectionThreeComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center text-white',
    //title: 'How it’s work',
    subTitle: 'Our Expertise'
  };

  circle1Data: any = {
    img: 'cicd.png',
    title: 'CI\\CD',
    /*description: 'Reduce your time to market by ensuring predictable software deployment every time',*/
    delay: '0.6s',
    positionClass: 'right',
  /*  type:'consult-services'*/

  };

  circle2Data: any = {
    class: 'mt-4 mt-md-4',
    img: 'artificial-intelligence.png',
    title: 'Machine Learning',
   /* description: 'ML cloud journey from the beginning to advanced pipelines',*/
    delay: '1s',
    positionClass: 'right',
    /*type:'consult-services'*/

  };

  circle3Data: any = {
    class: 'mt-4 mt-md-4',
    img: 'generative-image.png',
    title: 'Generative AI',
    /*description: 'Accelerate the power of LLMs, implement guardrails & evaluate models for your RAG to leverage business insights',*/
    delay: '1.4s',
    /*type:'consult-services'*/

  };

  circle4Data: any = {
    class: 'mt-4 mt-md-4',
    img: 'security.png',
    title: 'Security',
    /*description: 'Safeguard your business by implementing best practices',*/
    delay: '1s',
    positionClass: 'right',
    /*    type: 'consult-services'*/
    type: 'mt-4'

  };

  circle5Data: any = {
    class: 'mt-4 mt-md-4',
    img: 'ALM.png',
    title: 'App Lifecycle Management',
    /*description: 'Run on an optimized Kubernetes workload',*/
    delay: '1.4s',
    /*    type: 'consult-services'*/
    type: 'mt-4'

  };

  circle6Data: any = {
    class: 'mt-4 mt-md-4',
    img: 'SRE.png',
    title: 'Site Reliability Engineering',
    /*description: 'Accelerate the power of LLMs, implement guardrails & evaluate models for your RAG to leverage business insights',*/
    delay: '1.4s',
    /*    type: 'consult-services'*/
    type: 'mt-4'

  };

  constructor() { }

  ngOnInit() {
  }

}
