import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonial',
  templateUrl: './our-testimonial.component.html'
})
export class OurTestimonialComponent implements OnInit {

  //titleSectionProp: any = {
  //  class: 'text-center',
  //  title: 'TESTIMONIALS',
	 // subTitle: 'What Our Clients Say'
  //};

  //List : any[] = [
  //  {
  //    img:"1.jpg",
  //    name:"Jack White",
  //    designation:"CEO",
  //    desc:"Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur."
  //  },
  //  {
  //    img:"2.jpg",
  //    name:"Walhan Bobe",
  //    designation:"Business Advisor",
  //    desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste."
  //  },
  //  {
  //    img:"3.jpg",
  //    name:"Mark McManus",
  //    designation:"COO",
  //    desc:"“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”"
  //  }
  //];

  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'On-Premises to Cloud Migration',
    description: ' We offer comprehensive cloud migration and management services to help you smoothly relocate your applications, data, and infrastructure to the cloud. Our certified DevOps engineers ensure a secure and efficient transition, minimizing disruption to your business operations '
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Cloud-to-Cloud Migration',
    description: 'Our team as a trusted cloud migration service provider will assist you in navigating the complexities of cloud-to-cloud migrations. With our meticulous planning and execution, we ensure the transfer of workloads, data, and configurations between cloud platforms, preserving data integrity and minimizing downtime. '
  };
  List1: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  List2: any[] = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
  constructor() { }

  ngOnInit() {
  }

}
