import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html'
})
export class SectionThreeComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    //title: 'How it’s work',
    subTitle: 'Our Expertise'
  };

  circle1Data: any = {
    img: '01.png',
    title: 'CI\\CD',
    description: 'Reduce your time to market by ensuring predictable software deployment every time',
    delay: '0.6s',
    positionClass: 'right',
    type:'consult-services'

  };

  circle2Data: any = {
    class: 'mt-4 mt-md-0',
    img: '02.png',
    title: 'AI/ML',
    description: 'ML cloud journey from the beginning to advanced pipelines',
    delay: '1s',
    positionClass: 'right',
    type:'consult-services'

  };

  circle3Data: any = {
    class: 'mt-4 mt-md-0',
    img: '03.png',
    title: 'GenAI',
    description: 'Accelerate the power of LLMs, implement guardrails & evaluate models for your RAG to leverage business insights',
    delay: '1.4s',
    type:'consult-services'

  };

  circle4Data: any = {
    class: 'mt-4 mt-md-0',
    img: '01.png',
    title: 'Security',
    description: 'Safeguard your business by implementing best practices',
    delay: '1s',
    positionClass: 'right',
    type: 'consult-services'

  };

  circle5Data: any = {
    class: 'mt-4 mt-md-0',
    img: '02.png',
    title: 'Application Lifecycle Management',
    description: 'Run on an optimized Kubernetes workload',
    delay: '1.4s',
    type: 'consult-services'

  };

  circle6Data: any = {
    class: 'mt-4 mt-md-0',
    img: '03.png',
    title: 'Site Reliability Engineering',
    description: 'Accelerate the power of LLMs, implement guardrails & evaluate models for your RAG to leverage business insights',
    delay: '1.4s',
    type: 'consult-services'

  };

  constructor() { }

  ngOnInit() {
  }

}
