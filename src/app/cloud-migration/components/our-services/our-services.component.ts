import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html'
})
export class OurServicesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    //title: 'PROCESS',
    subTitle: 'Migration Steps'
  };

  List: any[] = [
    {
      align: 'timeline-article content-right-container',
      title: 'Assessment and planning',
      contact: [
       'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title: 'Preparation',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-right-container',
      title: 'Migration',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title: 'Testing and validation',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'timeline-article content-right-container',
      title: 'Post-migration optimization',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
    {
      align: 'content-left-container',
      title: 'Continuous monitoring',
      contact: [
        'Learn a group of 5 people',
        'Passages of Lorem Ipsum available.',
        'Easy to Customize List passages of available.'
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
