import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider1Module } from "./components/app-main/app-main.module";
import { LandingPage1RoutingModule } from './home-page-routing.module';
import { SectionFiveCustomerComponent } from './components/section-one-who-we-are/section-one-who-we-are.component';
import { SectionFourServicesComponent } from './components/section-four/section-four.component';
import { SectionNineBlogComponent } from './components/section-nine-blog/section-nine-blog.component';
import { SectionSevenServiceComponent } from './components/section-seven-service/section-seven-service.component';
import { SectionSixProjectsComponent } from './components/section-six-projects/section-six-projects.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { SectionVerticalOneComponent } from './components/section-two/section-two.component';
import { SectionVerticalTwoComponent } from './components/section-vertical-two/section-vertical-two.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    SectionFiveCustomerComponent,
    SectionFourServicesComponent,
    SectionNineBlogComponent,
    SectionSevenServiceComponent,
    SectionSixProjectsComponent,
    SectionThreeComponent,
    SectionVerticalOneComponent,
    SectionVerticalTwoComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    LandingPage1RoutingModule,
    XaminModule,
    RevolutionSlider1Module
  ]
})
export class LandingPage1Module { }
